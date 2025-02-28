require('dotenv').config();

module.exports = {
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'eshhfecq_admin',
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME || 'eshhfecq_adconnect',
        waitForConnections: true,
        connectionLimit: 10, // Limit concurrent connections
        queueLimit: 0
    },
};