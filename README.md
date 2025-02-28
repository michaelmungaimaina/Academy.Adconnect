# Description
Academy.Adconnect is an online learning platform designed to offer high-quality courses in various fields, including Digital Marketing, Web Development, Mobile Development, and Software Engineering. The platform allows users to enroll in courses on a pay-per-course basis, with payments seamlessly integrated using the M-Pesa payment system. The platform is built using **HTML**, **CSS**, **JavaScript** for the frontend and **Express.js** with **Node.js** and **PostgreSQL** for the backend.

The platform is designed to provide a user-friendly experience for both students and administrators. Students can browse courses, enroll in them, and make payments securely via M-Pesa. Administrators can manage courses, track payments, and monitor user activity.

## Features

- **Course Catalog**: A variety of courses in Digital Marketing, Web, Mobile, and Software Engineering.
- **Payment Integration**: Secure M-Pesa payment system for course purchases.
- **User Authentication**: Allows user registration, login, and profile management.
- **Responsive Frontend**: Built using HTML, CSS, and JavaScript.
- **Backend API**: Node.js and Express handling all backend processes.
- **PostgreSQL Database**: Stores course data, user information, and payment records.

## Technologies

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **Payment Integration**: M-Pesa

## Installation

### 1. Clone the Repository:
```bash
git clone https://github.com/yourusername/Academy.Adconnect.git
cd Academy.Adconnect
```
### 2. Backend Setup:
Navigate to the backend directory:
```bash
cd backend
```
Install required dependencies:
```bash
npm install
```
### 3. Set up PostgreSQL Database:
Create a PostgreSQL database.
Run the provided SQL schema to create necessary tables.
Configure your database connection in config/db.js.

### 4. M-Pesa Payment Integration:
Set up the M-Pesa payment gateway and integrate the API as per the M-Pesa documentation.

### 5. Start Backend Server:
Start
```bash
npm start
```
### 6. Frontend Setup:
Navigate to the frontend directory:
```bash
cd frontend
```
If using a simple HTML/CSS/JS frontend, just open index.html in the browser or serve it using a local server.

### 7. Run Frontend:
Open the index.html file in your browser to view the website.

# Project Structure
```graphql
Academy.Adconnect/
│
├── backend/                 # Backend (Node.js, Express, PostgreSQL)
│   ├── config/              # Configuration files (DB, environment variables, etc.)
│   ├── controllers/         # Controllers for API routes
│   ├── models/              # Database models (PostgreSQL tables)
│   ├── routes/              # Express route handlers
│   ├── services/            # Business logic (Payment Integration, etc.)
│   ├── app.js               # Main Express app setup
│   └── server.js            # Backend server setup
│
├── frontend/                # Frontend (HTML, CSS, JavaScript)
│   ├── assets/              # Static files (images, icons, etc.)
│   ├── css/                 # Stylesheets
│   ├── js/                  # JavaScript for frontend functionality
│   ├── index.html           # Main landing page
│   └── courses.html         # Courses listing page
│
├── database/                # Database-related files
│   ├── schema.sql           # SQL schema for PostgreSQL
│   └── migrations/          # Database migrations
│
├── .env                     # Environment variables (DB credentials, API keys)
└── README.md                # This file
```
### Usage
# Frontend
The frontend allows users to browse available courses and view details. When a user selects a course, they are redirected to the payment system (M-Pesa).

# Backend
The backend handles user authentication, course management, and payment processing. It integrates with the M-Pesa API to process payments securely.

# M-Pesa Payment Flow:
User selects a course.
Backend generates a payment request and redirects the user to M-Pesa.
After successful payment, M-Pesa sends a callback to the backend.
Payment status is updated, and access is granted to the course.
## License
This project is licensed under the MIT License - see the LICENSE file for details.
