require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
const config = require('./config.js');
const readline = require('readline');
const multer = require('multer');
const ExcelJS = require("exceljs");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
// Enable CORS for all origins
app.use(cors());

app.use(cors({
    origin: ['http://127.0.0.1:3000', 'http://127.0.0.1:63342', 'http://localhost:63342', 'https://adconnect.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));


//
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// Serve API routes under `/api`
app.use('/api', express.json()); // Ensure requests to `/api` parse JSON bodies

// Serve static files (HTML, CSS, JS)
app.use(express.static('/'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

console.log("DB Config:", {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD ? "****" : "MISSING",
    database: process.env.DB_NAME
});

// MySQL Connection
const db = mysql.createPool(config.db);
// Check database connection
db.getConnection((err, connection) => {
    if (err) {
        console.error('Error Connecting to Database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
    connection.release(); // Always release the connection back to the pool

    // Start Express server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`🚀 Server running on ${process.env.APP_API_URL || 'http://localhost'}:${PORT}`);
    });
});

// Multer Configuration for File Upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, `${regId()}${path.extname(file.originalname)}`),
});

// Serve static files from the "uploads" directory
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));
// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Format timestamp for EAT
/**
 * Function for getting the current date & time
 * @returns dat-time (yyyyMMddHHmmss)
 *
 */
const regId = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}${month}${day}${hours}${minutes}${seconds}`;
};

const createdAt = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
// 
const upload = multer({ storage: storage });

// Function to handle Student creation (register a new student)
app.post('/api/students', upload.single('icon'), (req, res) => {
    const {name, email, phone, password, town, address, company, icon} = req.body;

    // Validate that all required fields are provided
    if (!name || !email || !password || !phone) {
        return res.status(400).json({error: 'Missing field is required including icon file'});
    }

    const filePath = req.file ? req.file.path : null;
    if (!filePath) {
        return res.status(400).json({ error: 'File upload failed.' });
    }
    const id = regId();
    // Check if a user with the same name and email already exists
    const query1 = 'SELECT * FROM c_users WHERE email = ? OR phone = ?';
    db.query(query1, [email, phone], (err, rows) => {
        if (err) {
            console.error(err); // Log the error
            return res.status(500).json({error: 'Database error'}); // Return a server error response
        }
        // If the user already exists, return an error
        if (rows.length > 0) {
            return res.status(400).json({error: 'User Already Exists!'});
        }

        // Generate the correct URL for the image
        const serverUrl = `${req.protocol}://${req.get('host')}`;
        const imageUrl = `${serverUrl}/api/uploads/${req.file.filename}`;

        // Insert the new user into the database
        const query = `INSERT INTO c_users (id, name, email, phone, password, town, address, company, icon) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        db.query(query, [id, name, email, phone, password, town, address, company, filePath], (err) => {
            if (err) {
                console.error(err); // Log the error
                return res.status(500).json({error: 'Database error'}); // Return a server error response
            }

            // Return a success response with the generated user information
            res.status(201).json({
                message: 'Student created successfully',
                user: {id, name, email, phone, town, address, company, imageUrl},
            });
        });
    });
});

// Endpoint to get all students
app.get('/api/students', (req, res) => {
    const query = 'SELECT * FROM c_users';

    db.query(query, (err, students) => {
        if (err) {
            console.error('Database Error:', err);
            return res.status(500).json({ error: 'An error occurred while fetching the students' });
        }

        res.status(200).json(students);
    });
});

// Endpoint to get a single student
app.get('/api/students/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM c_users WHERE id = ?';

    db.query(query, [id], (err, student) => {
        if (err) {
            console.error('Database Error:', err);
            return res.status(500).json({ error: 'An error occurred while fetching the student' });
        }

        if (student.length === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.status(200).json(student[0]);
    });
});

// Endpoint to update a student
app.put('/api/students/:id', upload.single('icon'), (req, res) => {
    const { id } = req.params; // Get the student ID from the URL
    const { name, email, phone, password, town, address, status, company } = req.body;

    // Validate that at least one field is provided for update
    if (!name && !email && !phone && !password && !town && !status && !address && !company && !req.file) {
        return res.status(400).json({ error: 'At least one field is required for update.' });
    }

    // Check if the student exists
    const checkQuery = 'SELECT * FROM c_users WHERE id = ?';
    db.query(checkQuery, [id], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Student not found.' });
        }

        const student = rows[0];

        // Prepare the update query and values
        let updateQuery = 'UPDATE c_users SET ';
        const updateValues = [];
        let fieldsToUpdate = [];

        if (name) {
            fieldsToUpdate.push('name = ?');
            updateValues.push(name);
        }
        if (email) {
            fieldsToUpdate.push('email = ?');
            updateValues.push(email);
        }
        if (phone) {
            fieldsToUpdate.push('phone = ?');
            updateValues.push(phone);
        }
        if (password) {
            fieldsToUpdate.push('password = ?');
            updateValues.push(password);
        }
        if (town) {
            fieldsToUpdate.push('town = ?');
            updateValues.push(town);
        }
        if (status) {
            fieldsToUpdate.push('status = ?');
            updateValues.push(status);
        }
        if (address) {
            fieldsToUpdate.push('address = ?');
            updateValues.push(address);
        }
        if (company) {
            fieldsToUpdate.push('company = ?');
            updateValues.push(company);
        }

        // Handle file upload (icon)
        let imageUrl = null;
        if (req.file) {
            const serverUrl = `${req.protocol}://${req.get('host')}`;
            imageUrl = `${serverUrl}/api/uploads/${req.file.filename}`;
            fieldsToUpdate.push('icon = ?');
            updateValues.push(imageUrl);

            // Delete the existing icon file if it exists
            if (student.icon) {
                const existingIconPath = path.join(__dirname, 'uploads', path.basename(student.icon));
                fs.unlink(existingIconPath, (err) => {
                    if (err) {
                        console.error('Failed to delete existing icon file:', err);
                    }
                });
            }
        }

        // If no fields are provided for update, return an error
        if (fieldsToUpdate.length === 0) {
            return res.status(400).json({ error: 'No valid fields provided for update.' });
        }

        // Construct the final query
        updateQuery += fieldsToUpdate.join(', ') + ' WHERE id = ?';
        updateValues.push(id);

        // Execute the update query
        db.query(updateQuery, updateValues, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database error' });
            }

            // Fetch the updated student details
            const fetchQuery = 'SELECT * FROM c_users WHERE id = ?';
            db.query(fetchQuery, [id], (err, rows) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Database error' });
                }

                const updatedStudent = rows[0];
                res.status(200).json({
                    message: 'Student updated successfully',
                    user: updatedStudent,
                });
            });
        });
    });
});

// Endpoint to delete a student
app.delete('/api/students/:id', (req, res) => {
    const { id } = req.params; // Get the student ID from the URL

    // Check if the student exists
    const checkQuery = 'SELECT * FROM c_users WHERE id = ?';
    db.query(checkQuery, [id], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Student not found.' });
        }

        const student = rows[0];

        // Delete the student's icon file if it exists
        if (student.icon) {
            const iconPath = path.join(__dirname, 'uploads', path.basename(student.icon));
            fs.unlink(iconPath, (err) => {
                if (err) {
                    console.error('Failed to delete icon file:', err);
                }
            });
        }

        // Delete the student from the database
        const deleteQuery = 'DELETE FROM c_users WHERE id = ?';
        db.query(deleteQuery, [id], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database error' });
            }

            res.status(200).json({
                message: 'Student deleted successfully',
                user: student, // Return the deleted student's details
            });
        });
    });
});

// Function to handle Package creation
app.post('/api/packages', (req, res) => {
    const { n_period, n_amount, b_period, b_amount, s_period, s_amount, g_period, g_amount, package_name } = req.body;

    // Validate that all required fields are provided
    const inputs = [n_period, n_amount, b_period, b_amount, s_period, s_amount, g_period, g_amount];
    const filledInputs = inputs.filter(input => input !== undefined && input !== null && input !== '');

    if (filledInputs.length < 2) {
        return res.status(400).json({ error: 'At least two subsequent inputs must have value' });
    }

    const id = regId();

    // Check if a package with the same name already exists
    const checkQuery = 'SELECT * FROM packages WHERE package_name = ?';
    db.query(checkQuery, [package_name], (err, rows) => {
        if (err) {
            console.error(err); // Log the error
            return res.status(500).json({ error: 'Database error' }); // Return a server error response
        }

        // If the package already exists, return an error
        if (rows.length > 0) {
            return res.status(400).json({ error: 'Package Already Exists!' });
        }

        // Insert the new package into the database
        const query = `INSERT INTO packages (id, n_period, n_amount, b_period, b_amount, s_period, s_amount, g_period, g_amount, package_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        db.query(query, [id, n_period, n_amount, b_period, b_amount, s_period, s_amount, g_period, g_amount, package_name], (err) => {
            if (err) {
                console.error(err); // Log the error
                return res.status(500).json({ error: 'Database error' }); // Return a server error response
            }

            // Return a success response with the generated package information
            res.status(201).json({
                message: 'Package created successfully',
                package: { id, n_period, n_amount, b_period, b_amount, s_period, s_amount, g_period, g_amount, package_name },
            });
        });
    });
});

// Endpoint to get all packages
app.get('/api/packages', (req, res) => {
    const query = 'SELECT * FROM packages';

    db.query(query, (err, packages) => {
        if (err) {
            console.error('Database Error:', err);
            return res.status(500).json({ error: 'An error occurred while fetching the packages' });
        }

        res.status(200).json(packages);
    });
});

// Endpoint to get a single package
app.get('/api/packages/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM packages WHERE id = ?';

    db.query(query, [id], (err, package) => {
        if (err) {
            console.error('Database Error:', err);
            return res.status(500).json({ error: 'An error occurred while fetching the package' });
        }

        if (package.length === 0) {
            return res.status(404).json({ error: 'Package not found' });
        }

        res.status(200).json(package[0]);
    });
});

// Endpoint to update a package
app.put('/api/packages/:id', (req, res) => {
    const { id } = req.params;
    const { n_period, n_amount, b_period, b_amount, s_period, s_amount, g_period, g_amount, package_name } = req.body;

    // Validate that at least one field is provided for update
    if (!n_period && !n_amount && !b_period && !b_amount && !s_period && !s_amount && !g_period && !g_amount && !package_name) {
        return res.status(400).json({ error: 'At least one field is required for update.' });
    }

    // Check if the package exists
    const checkQuery = 'SELECT * FROM packages WHERE id = ?';
    db.query(checkQuery, [id], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Package not found.' });
        }

        // Prepare the update query and values
        let updateQuery = 'UPDATE packages SET ';
        const updateValues = [];
        let fieldsToUpdate = [];

        if (n_period) {
            fieldsToUpdate.push('n_period = ?');
            updateValues.push(n_period);
        }
        if (n_amount) {
            fieldsToUpdate.push('n_amount = ?');
            updateValues.push(n_amount);
        }
        if (b_period) {
            fieldsToUpdate.push('b_period = ?');
            updateValues.push(b_period);
        }
        if (b_amount) {
            fieldsToUpdate.push('b_amount = ?');
            updateValues.push(b_amount);
        }
        if (s_period) {
            fieldsToUpdate.push('s_period = ?');
            updateValues.push(s_period);
        }
        if (s_amount) {
            fieldsToUpdate.push('s_amount = ?');
            updateValues.push(s_amount);
        }
        if (g_period) {
            fieldsToUpdate.push('g_period = ?');
            updateValues.push(g_period);
        }
        if (g_amount) {
            fieldsToUpdate.push('g_amount = ?');
            updateValues.push(g_amount);
        }
        if (package_name) {
            fieldsToUpdate.push('package_name = ?');
            updateValues.push(package_name);
        }

        // If no fields are provided for update, return an error
        if (fieldsToUpdate.length === 0) {
            return res.status(400).json({ error: 'No valid fields provided for update.' });
        }

        // Construct the final query
        updateQuery += fieldsToUpdate.join(', ') + ' WHERE id = ?';
        updateValues.push(id);

        // Execute the update query
        db.query(updateQuery, updateValues, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database error' });
            }

            // Fetch the updated package details
            const fetchQuery = 'SELECT * FROM packages WHERE id = ?';
            db.query(fetchQuery, [id], (err, rows) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Database error' });
                }

                const updatedPackage = rows[0];
                res.status(200).json({
                    message: 'Package updated successfully',
                    package: updatedPackage,
                });
            });
        });
    });
});

// Endpoint to delete a package
app.delete('/api/packages/:id', (req, res) => {
    const { id } = req.params;

    // Check if the package exists
    const checkQuery = 'SELECT * FROM packages WHERE id = ?';
    db.query(checkQuery, [id], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Package not found.' });
        }

        // Delete the package from the database
        const deleteQuery = 'DELETE FROM packages WHERE id = ?';
        db.query(deleteQuery, [id], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database error' });
            }

            res.status(200).json({
                message: 'Package deleted successfully',
                package: rows[0],
            });
        });
    });
});

// Function to handle Course creation
app.post('/api/courses', (req, res) => {
    const { title, description, preview, package } = req.body;

    // Validate that all required fields are provided
    if (!title || !description || !preview || !package) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const id = regId();

    // Check if a course with the same title already exists
    const checkQuery = 'SELECT * FROM courses WHERE title = ?';
    db.query(checkQuery, [title], (err, rows) => {
        if (err) {
            console.error(err); // Log the error
            return res.status(500).json({ error: 'Database error' }); // Return a server error response
        }

        // If the course already exists, return an error
        if (rows.length > 0) {
            return res.status(400).json({ error: 'Course Already Exists!' });
        }

        // Insert the new course into the database
        const query = `INSERT INTO courses (id, title, description, preview, package) VALUES (?, ?, ?, ?, ?)`;
        db.query(query, [id, title, description, preview, package], (err) => {
            if (err) {
                console.error(err); // Log the error
                return res.status(500).json({ error: 'Database error' }); // Return a server error response
            }

            // Return a success response with the generated course information
            res.status(201).json({
                message: 'Course created successfully',
                course: { id, title, description, preview, package },
            });
        });
    });
});

// Endpoint to get all courses
app.get('/api/courses', (req, res) => {
    const query = 'SELECT * FROM courses';

    db.query(query, (err, courses) => {
        if (err) {
            console.error('Database Error:', err);
            return res.status(500).json({ error: 'An error occurred while fetching the courses' });
        }

        res.status(200).json(courses);
    });
});

// Endpoint to get a single course
app.get('/api/courses/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM courses WHERE id = ?';

    db.query(query, [id], (err, course) => {
        if (err) {
            console.error('Database Error:', err);
            return res.status(500).json({ error: 'An error occurred while fetching the course' });
        }

        if (course.length === 0) {
            return res.status(404).json({ error: 'Course not found' });
        }

        res.status(200).json(course[0]);
    });
});

// Endpoint to update a course
app.put('/api/courses/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, preview, package } = req.body;

    // Validate that at least one field is provided for update
    if (!title && !description && !preview && !package) {
        return res.status(400).json({ error: 'At least one field is required for update.' });
    }

    // Check if the course exists
    const checkQuery = 'SELECT * FROM courses WHERE id = ?';
    db.query(checkQuery, [id], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Course not found.' });
        }

        // Prepare the update query and values
        let updateQuery = 'UPDATE courses SET ';
        const updateValues = [];
        let fieldsToUpdate = [];

        if (title) {
            fieldsToUpdate.push('title = ?');
            updateValues.push(title);
        }
        if (description) {
            fieldsToUpdate.push('description = ?');
            updateValues.push(description);
        }
        if (preview) {
            fieldsToUpdate.push('preview = ?');
            updateValues.push(preview);
        }
        if (package) {
            fieldsToUpdate.push('package = ?');
            updateValues.push(package);
        }

        // If no fields are provided for update, return an error
        if (fieldsToUpdate.length === 0) {
            return res.status(400).json({ error: 'No valid fields provided for update.' });
        }

        // Construct the final query
        updateQuery += fieldsToUpdate.join(', ') + ' WHERE id = ?';
        updateValues.push(id);

        // Execute the update query
        db.query(updateQuery, updateValues, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database error' });
            }

            // Fetch the updated course details
            const fetchQuery = 'SELECT * FROM courses WHERE id = ?';
            db.query(fetchQuery, [id], (err, rows) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Database error' });
                }

                const updatedCourse = rows[0];
                res.status(200).json({
                    message: 'Course updated successfully',
                    course: updatedCourse,
                });
            });
        });
    });
});

// Endpoint to delete a course
app.delete('/api/courses/:id', (req, res) => {
    const { id } = req.params;

    // Check if the course exists
    const checkQuery = 'SELECT * FROM courses WHERE id = ?';
    db.query(checkQuery, [id], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Course not found.' });
        }

        // Delete the course from the database
        const deleteQuery = 'DELETE FROM courses WHERE id = ?';
        db.query(deleteQuery, [id], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database error' });
            }

            res.status(200).json({
                message: 'Course deleted successfully',
                course: rows[0],
            });
        });
    });
});


app.post('/api/test-server', (req, res) => {
    res.status(200).json({ message: 'Test route works!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
});

// 404 Not Found middleware
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// Export the app for testing
module.exports = app;