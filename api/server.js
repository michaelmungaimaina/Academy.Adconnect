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
const axios = require('axios');
const moment = require('moment');
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

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


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

// Function to handle user creation (register a new user)
app.post('/api/users', (req, res) => {
    const {name, email, password, role, access_level} = req.body;

    // Validate that all required fields are provided
    if (!name || !email || !password || !role || !access_level) {
        return res.status(400).json({error: 'All fields are required'});
    }

    // Check if a user with the same name and email already exists
    const query1 = 'SELECT * FROM users WHERE name = ? AND email = ?';
    db.query(query1, [name, email], (err, rows) => {
        if (err) {
            console.error(err); // Log the error
            return res.status(500).json({error: 'Database error'}); // Return a server error response
        }
        // If the user already exists, return an error
        if (rows.length > 0) {
            return res.status(400).json({error: 'User Already Exists!'});
        }

        const clientID = regId();
        const timestamp = createdAt();

        // Insert the new user into the database
        const query = `INSERT INTO users (id, name, email, password, role, access_level, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        db.query(query, [clientID, name, email, password, role, access_level, timestamp], (err) => {
            if (err) {
                console.error(err); // Log the error
                return res.status(500).json({error: 'Database error'}); // Return a server error response
            }

            // Return a success response with the generated user information
            res.status(201).json({
                message: 'User created successfully',
                user: {clientID, name, email, role, access_level, timestamp},
            });
        });
    });
});

// Function to handle user authentication (Login user)
app.post('/api/auth', (req, res) => {
    const {email, password} = req.body;
    // Ensure email and password values are provided
    if (!email || !password) {
        return res.status(400).json({error: 'Email and password are required'});
    }
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, rows) => {
        // Log database error if any occurs
        if (err) {
            console.error(err);
            return res.status(500).json({error: 'Database error'});
        }
        // Check if user exists in the database
        if (rows.length === 0) {
            return res.status(404).json({error: 'User not found'});
        }
        // Return login success message along with username
        res.status(200).json({message: 'Login successful', username: rows[0].name});
    });
});


// Endpoint to get all users
app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, users) => {
        if (err) {
            console.error(err);
            return res.status(500).json({error: 'Database error'});
        }
        res.status(200).json(users);
    });
});

// Endpoint to get user by id
app.get('/api/users/:id', (req, res) => {
    const {id} = req.params; // Extract the user ID from request parameters
    const query = 'SELECT * FROM users WHERE id = ?'; // Query to retrieve the user by ID
    db.query(query, [id], (err, rows) => {
        if (err) {
            console.error(err); // Log the error if any occurs
            return res.status(500).json({error: 'Database error'}); // Send a 500 response for database error
        }
        if (rows.length === 0) {
            return res.status(404).json({error: 'User not found'}); // Send a 404 response if no user is found
        }
        res.status(200).json(rows[0]); // Send the user data in a success response
    });
});
// Endpoint to update user by id
app.put('/api/users/:id', (req, res) => {
    const {id} = req.params; // Extract the user ID from request parameters
    const {name, email, password, role, access_level} = req.body; // Extract the fields to be updated from the request body
    const query = `UPDATE users SET name = ?, email = ?, password = ?, role = ?, access_level = ? WHERE id = ?`; // Query to update the user
    db.query(query, [name, email, password, role, access_level, id], (err) => {
        if (err) {
            console.error(err); // Log the error if any occurs
            return res.status(500).json({error: 'Database error'}); // Send a 500 response for database error
        }
        res.status(200).json({message: 'User updated successfully', user: req.body}); // Send a success response
    });
});

// Endpoint to delete user by id
app.delete('/api/users/:id', (req, res) => {
    const {id} = req.params; // Extract the user ID from request parameters
    const query = 'DELETE FROM users WHERE id = ?'; // Query to delete the user
    db.query(query, [id], (err) => {
        if (err) {
            console.error(err); // Log the error if any occurs
            return res.status(500).json({error: 'Database error'}); // Send a 500 response for database error
        }
        res.status(200).json({message: 'User deleted successfully'}); // Send a success response
    });
});
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
            const firstSection = `${serverUrl}/api/`;
            const secondSection = `uploads/${req.file.filename}`;
            imageUrl = `${firstSection}${secondSection}`;
            fieldsToUpdate.push('icon = ?');
            updateValues.push(secondSection);

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
                // Check for foreign key constraint error
                if (err.code === 'ER_ROW_IS_REFERENCED_2') {
                    return res.status(400).json({ error: 'Cannot delete package: it is referenced by another table.' });
                }
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
    const query = 'SELECT courses.*, packages.package_name AS pname FROM courses JOIN packages ON courses.package = packages.id';

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
                // Check for foreign key constraint error
                if (err.code === 'ER_ROW_IS_REFERENCED_2') {
                    return res.status(400).json({ error: 'Cannot delete Course: it is referenced by another table.' });
                }
                return res.status(500).json({ error: 'Database error' });
            }

            res.status(200).json({
                message: 'Course deleted successfully',
                course: rows[0],
            });
        });
    });
});


// Function to handle Module creation
app.post('/api/modules', (req, res) => {
    const { title, about, video, resource, course } = req.body;

    // Validate that all required fields are provided
    if (!title || !about || !video || !resource || !course) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const id = regId();

    // Check if a module with the same title already exists
    const checkQuery = 'SELECT * FROM modules WHERE title = ?';
    db.query(checkQuery, [title], (err, rows) => {
        if (err) {
            console.error(err); // Log the error
            return res.status(500).json({ error: 'Database error' }); // Return a server error response
        }

        // If the module already exists, return an error
        if (rows.length > 0) {
            return res.status(400).json({ error: 'Module Already Exists!' });
        }

        // Insert the new module into the database
        const query = `INSERT INTO modules (id, title, about, video, resource, course) VALUES (?, ?, ?, ?, ?, ?)`;
        db.query(query, [id, title, about, video, resource, course], (err) => {
            if (err) {
                console.error(err); // Log the error
                return res.status(500).json({ error: 'Database error' }); // Return a server error response
            }

            // Return a success response with the generated module information
            res.status(201).json({
                message: 'Module created successfully',
                module: { id, title, about, video, resource, course },
            });
        });
    });
});

// Endpoint to get all modules for all courses
app.get('/api/modules', (req, res) => {
    const query = 'SELECT modules.*, courses.title AS cname FROM modules JOIN courses ON modules.course = courses.id';

    db.query(query, (err, modules) => {
        if (err) {
            console.error('Database Error:', err);
            return res.status(500).json({ error: 'An error occurred while fetching the modules' });
        }

        res.status(200).json(modules);
    });
});

// Endpoint to get all modules for a single course
app.get('/api/modules/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT modules.*, courses.title AS ctitle FROM modules JOIN courses ON modules.course = courses.id WHERE modules.id = ?';

    db.query(query, [id], (err, module) => {
        if (err) {
            console.error('Database Error:', err);
            return res.status(500).json({ error: 'An error occurred while fetching the module' });
        }

        if (module.length === 0) {
            return res.status(404).json({ error: 'Module not found' });
        }

        res.status(200).json(module[0]);
    });
});

// Endpoint to update a module
app.put('/api/modules/:id', (req, res) => {
    const { id } = req.params;
    const { title, about, video, resource, course } = req.body;

    // Validate that at least one field is provided for update
    if (!title && !about && !video && !resource && !course) {
        return res.status(400).json({ error: 'At least one field is required for update.' });
    }

    // Check if the module exists
    const checkQuery = 'SELECT * FROM modules WHERE id = ?';
    db.query(checkQuery, [id], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Module not found.' });
        }

        // Prepare the update query and values
        let updateQuery = 'UPDATE modules SET ';
        const updateValues = [];
        let fieldsToUpdate = [];

        if (title) {
            fieldsToUpdate.push('title = ?');
            updateValues.push(title);
        }
        if (about) {
            fieldsToUpdate.push('about = ?');
            updateValues.push(about);
        }
        if (video) {
            fieldsToUpdate.push('video = ?');
            updateValues.push(video);
        }
        if (resource) {
            fieldsToUpdate.push('resource = ?');
            updateValues.push(resource);
        }
        if (course) {
            fieldsToUpdate.push('course = ?');
            updateValues.push(course);
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

            // Fetch the updated module details
            const fetchQuery = 'SELECT * FROM modules WHERE id = ?';
            db.query(fetchQuery, [id], (err, rows) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Database error' });
                }

                const updatedModule = rows[0];
                res.status(200).json({
                    message: 'Module updated successfully',
                    module: updatedModule,
                });
            });
        });
    });
});

// Endpoint to delete a module
app.delete('/api/modules/:id', (req, res) => {
    const { id } = req.params;

    // Check if the module exists
    const checkQuery = 'SELECT * FROM modules WHERE id = ?';
    db.query(checkQuery, [id], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Module not found.' });
        }

        // Check if the module is linked to any resources
        const resourceCheckQuery = 'SELECT * FROM resources WHERE module = ?';
        db.query(resourceCheckQuery, [id], (err, resourceRows) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database error' });
            }

            if (resourceRows.length > 0) {
                return res.status(400).json({ error: 'Module is linked to resources and cannot be deleted.' });
            }

            // Delete the module from the database
            const deleteQuery = 'DELETE FROM modules WHERE id = ?';
            db.query(deleteQuery, [id], (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Database error' });
                }

                res.status(200).json({
                    message: 'Module deleted successfully',
                    module: rows[0],
                });
            });
        });
    });
});

// Function to handle Resource creation
app.post('/api/resources', upload.single('resource'), (req, res) => {
    const { title, module } = req.body;

    // Validate that all required fields are provided
    if (!title || !module) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const id = regId();

    const filePath = req.file ? req.file.path : null;
    if (!filePath) {
        return res.status(400).json({ error: 'File upload failed.' });
    }

    // Check if a resource with the same title already exists
    const checkQuery = 'SELECT * FROM resources WHERE title = ? and module = ?';
    db.query(checkQuery, [title, module], (err, rows) => {
        if (err) {
            console.error(err); // Log the error
            return res.status(500).json({ error: 'Database error' }); // Return a server error response
        }

        // If the resource already exists, return an error
        if (rows.length > 0) {
            return res.status(400).json({ error: 'Resource Already Exists!' });
        }

        // Insert the new resource into the database
        const query = `INSERT INTO resources (id, title, resource, module) VALUES (?, ?, ?, ?)`;
        db.query(query, [id, title, filePath, module], (err) => {
            if (err) {
                console.error(err); // Log the error
                return res.status(500).json({ error: 'Database error' }); // Return a server error response
            }

            // Return a success response with the generated resource information
            res.status(201).json({
                message: 'Resource created successfully',
                resource: { id, title, resource: filePath, module },
            });
        });
    });
});

// Endpoint to get all resources for a specific module
app.get('/api/resources/:id', (req, res) => {
    id = req.params.id;
    const query = 'SELECT resources.*, modules.title AS mname FROM resources JOIN modules ON resources.module = modules.id where resources.module = ?';

    db.query(query,[id], (err, resources) => {
        if (err) {
            console.error('Database Error:', err);
            return res.status(500).json({ error: 'An error occurred while fetching the resources' });
        }

        res.status(200).json(resources);
    });
});

// Endpoint to check if a module ID is referenced in the resources table
app.get('/api/resources/check-module/:id', (req, res) => {
    const moduleId = req.params.id;

    // Query to check if the module ID exists in the resources table
    const query = `
        SELECT EXISTS(
            SELECT 1 
            FROM resources 
            WHERE module = ?
        ) AS isReferenced;
    `;

    // Execute the query
    db.query(query, [moduleId], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        // Extract the result (true or false)
        const isReferenced = results[0].isReferenced === 1;

        // Return the response
        res.json({ isReferenced });
    });
});

// Endpoint to get resources for all modules
app.get('/api/resources', (req, res) => {
    const query = 'SELECT resources.*, modules.title AS mname FROM resources JOIN modules ON resources.module = modules.id';

    db.query(query, (err, resources) => {
        if (err) {
            console.error('Database Error:', err);
            return res.status(500).json({ error: 'An error occurred while fetching the resources' });
        }

        res.status(200).json(resources);
    });
});

// Endpoint to update a resource
app.put('/api/resources/:id', upload.single('resource'), (req, res) => {
    const { id } = req.params;
    const { title, module, resource } = req.body;

    // Validate that at least one field is provided for update
    if (!title && !module && !req.file && !resource) {
        return res.status(400).json({ error: 'At least one field is required for update.' });
    }

    // Check if the resource exists
    const checkQuery = 'SELECT * FROM resources WHERE id = ?';
    db.query(checkQuery, [id], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Resource not found.' });
        }

        const existingResource = rows[0];

        // Prepare the update query and values
        let updateQuery = 'UPDATE resources SET ';
        const updateValues = [];
        let fieldsToUpdate = [];

        if (title) {
            fieldsToUpdate.push('title = ?');
            updateValues.push(title);
        }
        if (module) {
            fieldsToUpdate.push('module = ?');
            updateValues.push(module);
        }

        let fileStatus = 'File not Changed'; // Default status
        let resourceUrl = null;

        // Handle file upload (resource)
        if (req.file) {
            const serverUrl = `${req.protocol}://${req.get('host')}`;
            const firstSection = `${serverUrl}/api/`;
            const secondSection = `uploads/${req.file.filename}`;
            resourceUrl = `${firstSection}${secondSection}`;

        // Check if the incoming resource is an object or a string
        // Check if the incoming file path is different from the stored file path
        if (existingResource.resource !== secondSection) {
            //if (typeof resource === 'object' && resource !== null) {
            // If the resource is an object, the file has changed
            fieldsToUpdate.push('resource = ?');
            updateValues.push(secondSection);

                fileStatus = 'File Changed'; // Update status

                // Delete the existing resource file if it exists
                if (existingResource.resource) {
                    const existingResourcePath = path.join(__dirname, 'uploads', path.basename(existingResource.resource));
                    fs.unlink(existingResourcePath, (err) => {
                        if (err) {
                            console.error('Failed to delete existing resource file:', err);
                        }
                    });
                }
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

            // Fetch the updated resource details
            const fetchQuery = 'SELECT * FROM resources WHERE id = ?';
            db.query(fetchQuery, [id], (err, rows) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Database error' });
                }

                const updatedResource = rows[0];
                res.status(200).json({
                    message: 'Resource updated successfully',
                    resource: updatedResource,
                    fileStatus: fileStatus, // Include the file status in the response
                });
            });
        });
    });
});

// Endpoint to delete a resource
app.delete('/api/resources/:id', (req, res) => {
    const { id } = req.params;

    // Check if the resource exists
    const checkQuery = 'SELECT * FROM resources WHERE id = ?';
    db.query(checkQuery, [id], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Resource not found.' });
        }

        resource = rows[0];

        // Delete the resource from the database
        const deleteQuery = 'DELETE FROM resources WHERE id = ?';
        db.query(deleteQuery, [id], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database error' });
            }

            // Delete the resource file if it exists
            if (resource.resource) {
                const resourcePath = path.join(__dirname, 'uploads', path.basename(resource.resource));
                fs.unlink(resourcePath, (err) => {
                    if (err) {
                        console.error('Failed to delete resource file:', err);
                    }
                });
            }

            res.status(200).json({
                message: 'Resource deleted successfully',
                resource: rows[0],
            });
        });
    });
});

// Function to get M-Pesa access token
const getMpesaAccessToken = async () => {
    try {
        console.log('Getting M-Pesa access token');
        
        // Log the consumer key and secret to check if they are loaded correctly
        console.log('MPESA_CONSUMER_KEY:', process.env.MPESA_CONSUMER_KEY);
        console.log('MPESA_CONSUMER_SECRET:', process.env.MPESA_CONSUMER_SECRET);

        // Create the base64-encoded Authorization header
        const auth = Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString('base64');
        console.log('Authorization token:', auth);

        // Make the request to get the access token
        const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
            headers: {
                Authorization: `Basic ${auth}`
            }
        });

        console.log('Access token response:', response.data);

        // Return the access token
        return response.data.access_token;
    } catch (error) {
        // Log error details
        if (error.response) {
            console.error('Response error:', error.response.data);
            console.error('Status code:', error.response.status);
        } else if (error.request) {
            console.error('Request error:', error.request);
        } else {
            console.error('Error:', error.message);
        }
    }
};



//getMpesaAccessToken();
app.post('/api/payments/initiate', async (req, res) => {
    const { phoneNumber, amount, course, package, client } = req.body;

    // Validate that all required fields are provided
    if (!phoneNumber || !amount || !course || !package || !client) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const id = regId();
    const status = 'Pending';

    try {
        // Get access token
        const accessToken = await getMpesaAccessToken();
        console.log('Access Token:', accessToken); // Debug log for token

        // Initiate M-Pesa payment
        const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
            BusinessShortCode: process.env.MPESA_BUSINESS_SHORT_CODE,
            Password: process.env.MPESA_PASSWORD,
            Timestamp: moment().format('YYYYMMDDHHmmss'),
            TransactionType: 'CustomerPayBillOnline',
            Amount: amount,
            PartyA: phoneNumber,
            PartyB: process.env.MPESA_BUSINESS_SHORT_CODE,
            PhoneNumber: phoneNumber,
            //CallBackURL: `${req.protocol}://${req.get('host')}/api/payments/callback`,
            CallBackURL: ` https://d8f9-197-232-93-27.ngrok-free.app/api/payments/callback`,
            AccountReference: 'Adconnect',
            TransactionDesc: 'Payment for course'
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        });

        // Store the payment initiation details in the database
        const query = `INSERT INTO payments (id, course, date, package, status, client, amount_paid) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        db.query(query, [id, course, createdAt(), package, status, client, amount], (err) => {
            if (err) {
                console.error(err); // Log the error
                return res.status(500).json({ error: 'Database error' });
            }

            // Return a success response with the payment initiation details
            res.status(201).json({
                message: 'Payment initiated successfully',
                payment: { id, course, date: createdAt(), package, status, client, amount }
            });
        });
    } catch (error) {
        console.error('Error initiating M-Pesa payment:', error);

        if (error.response) {
            // Log detailed error response from M-Pesa
            console.error('Error response from M-Pesa:', error.response.data);
            console.error('Error status code:', error.response.status);
        } else if (error.request) {
            // Log error related to the request
            console.error('Error with the request:', error.request);
        } else {
            // Log other types of errors
            console.error('Error message:', error.message);
        }

        res.status(500).json({ error: 'M-Pesa payment initiation failed' });
    }
});



// Function to handle M-Pesa payment callback
app.post('/api/payments/callback', (req, res) => {
    const { Body: { stkCallback } } = req.body;

    if (stkCallback.ResultCode === 0) {
        const mpesa_code = stkCallback.CallbackMetadata.Item.find(item => item.Name === 'MpesaReceiptNumber').Value;
        const amount_paid = stkCallback.CallbackMetadata.Item.find(item => item.Name === 'Amount').Value;
        const id = stkCallback.CallbackMetadata.Item.find(item => item.Name === 'InvoiceNumber').Value;

        // Update the payment details in the database
        const query = `UPDATE payments SET mpesa_code = ?, amount_paid = ?, status = 'Completed' WHERE id = ?`;
        db.query(query, [mpesa_code, amount_paid, id], (err) => {
            if (err) {
                console.error('Error updating payment details:', err);
                return res.status(500).json({ error: 'Database error' });
            }

            res.status(200).json({ message: 'Payment completed successfully' });
        });
    } else {
        res.status(400).json({ error: 'Payment failed' });
    }
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