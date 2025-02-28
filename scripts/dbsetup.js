const mysql = require('mysql2');

// Debug the config
console.log("Database config:", {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}
);

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost', 
    user: process.env.DB_USER || 'root',      
    password: process.env.DB_PASSWORD,  
    database:  process.env.DB_NAME || 'adconnect' 
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database.');

    const createDbQuery = 'CREATE DATABASE IF NOT EXISTS adconnect';
    const createTableCourseUsers = `
    CREATE TABLE IF NOT EXISTS c_users (
    id VARCHAR(24) PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    phone VARCHAR(15) UNIQUE,
    status VARCHAR(15) DEFAULT 'UNVERIFIED', -- verified, unverified
    password VARCHAR(24),
    town VARCHAR(20),
    address VARCHAR(50),
    company VARCHAR(30),
    icon TEXT
);
  `; 
  
  const createTableSubcriptions = `
    CREATE TABLE IF NOT EXISTS subscriptions (
    id VARCHAR(24) PRIMARY KEY,
    user_id VARCHAR(24),
    package_id VARCHAR(24),
    payment_id VARCHAR(24),
    package_plan VARCHAR(10),
    start_date TEXT,
    end_date TEXT,
    status VARCHAR(15), -- active, expired, canceled
    FOREIGN KEY (user_id) REFERENCES c_users(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY (package_id) REFERENCES packages(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);
  `; 
  const createTablePayments = `
    CREATE TABLE IF NOT EXISTS payments (
    id VARCHAR(24) PRIMARY KEY,
    course VARCHAR(24),
    date TEXT,
    package VARCHAR(24),
    status VARCHAR(24),
    client VARCHAR(24),
    mpesa_code VARCHAR(20) UNIQUE, -- M-Pesa transaction code
    amount_paid VARCHAR(10), -- Amount paid by the user
    FOREIGN KEY (course) REFERENCES courses(id)
        ON UPDATE CASCADE
        ON DELETE NO ACTION,
    FOREIGN KEY (package) REFERENCES packages(id)
        ON UPDATE CASCADE
        ON DELETE NO ACTION,
    FOREIGN KEY (client) REFERENCES c_users(id)
        ON UPDATE CASCADE
        ON DELETE NO ACTION
);
  `;
  const createTableResources = `
    CREATE TABLE IF NOT EXISTS resources (
    id VARCHAR(24) PRIMARY KEY,
    title TEXT,
    resource TEXT,
    module VARCHAR(24),
    FOREIGN KEY (module) REFERENCES modules(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);
  `; 
  
  const createTableModules = `
    CREATE TABLE IF NOT EXISTS modules (
    id VARCHAR(24) PRIMARY KEY,
    title TEXT,
    about TEXT,
    video TEXT,
    resource VARCHAR(6),
    course VARCHAR(24),
    FOREIGN KEY (course) REFERENCES courses(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);
  `;
  const createTableCourses = `
    CREATE TABLE IF NOT EXISTS courses (
    id VARCHAR(24) PRIMARY KEY,
    title TEXT,
    description TEXT,
    preview TEXT,
    package VARCHAR(24),
    FOREIGN KEY (package) REFERENCES packages(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);
  `;
  
    const createTablePackages = `
    CREATE TABLE IF NOT EXISTS packages (
    id VARCHAR(24) PRIMARY KEY,
    n_period VARCHAR(15),
    n_amount VARCHAR(10),
    b_period VARCHAR(10),
    b_amount VARCHAR(10),
    s_period VARCHAR(10),
    s_amount VARCHAR(10),
    g_period VARCHAR(10),
    g_amount VARCHAR(10),
    package_name TEXT
);
  `;

       // Create database and tables
    db.query(createDbQuery, (err) => {
        if (err) {
            console.error('Error creating database:', {
                message: err.message,
                code: err.code,
                stack: err.stack,
            });
            return;
        }
        console.log('Database created or already exists.');

        db.changeUser({ database: 'adconnect' }, (err) => {
            if (err) {
                console.error('Error switching to database "elixir_salon":', {
                    message: err.message,
                    code: err.code,
                    stack: err.stack,
                });
                return;
            }
            console.log('Switched to database "elixir_salon".');

            // Helper function to execute and debug queries
            const executeQuery = (query, description) => {
                db.query(query, (err, results) => {
                    if (err) {
                        console.error(`Error executing query for ${description}:`, {
                            query,
                            message: err.message,
                            code: err.code,
                            stack: err.stack,
                        });
                    } else {
                        console.log(`${description} executed successfully.`);
                    }
                });
            };

            // Create Packages table
            executeQuery(createTablePackages, 'Packages table');

            // Create Courses table
            executeQuery(createTableCourses, 'Courses table');

            // Create Modules table
            executeQuery(createTableModules, 'Modules table');
            
            // Create Resources table
            executeQuery(createTableResources, 'Resources table');

            // Create Payments table
            executeQuery(createTablePayments, 'Payments table');

            // Create Students table
            executeQuery(createTableCourseUsers, 'Course User table');
            
            // Create Subscriptions table
            executeQuery(createTableSubcriptions, 'Subscription table');
            
            // Close the database connection
            db.end((err) => {
                if (err) {
                    console.error('Error closing the database connection:', {
                        message: err.message,
                        code: err.code,
                        stack: err.stack,
                    });
                } else {
                    console.log('Database connection closed.');
                }
            });
        });
    });
});