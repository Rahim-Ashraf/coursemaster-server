# Coursemaster Server

## Description
This is the backend server for the Coursemaster application, responsible for handling user authentication, course management, and enrollment processes. It provides a robust API for the frontend client to interact with.

## Features
- User Authentication (Registration, Login)
- Course Management (Create, Read, Update, Delete courses)
- Course Enrollment
- Role-based access control (e.g., Admin middleware)
- Database integration for persistent data storage

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (LTS recommended)

## Installation

1.  **Clone the repository:**

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root of the project and add the necessary environment variables.
    Example `.env`:
    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```
    (Adjust variables based on your actual configuration in `config/db.js` and authentication middleware)

4.  **Database Setup:**
    Ensure your database is running and accessible via the connection string provided in `MONGO_URI`. If using MongoDB with Mongoose, the connection will be handled by `config/db.js`.

5.  **Start the server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    The server should now be running, typically on `http://localhost:5000` (or your specified PORT).

**API Endpoints (Examples):**
-   `/api/auth/register` (POST)
-   `/api/auth/login` (POST)
-   `/api/courses` (GET, POST)
-   `/api/courses/:id` (GET, PUT, DELETE)
-   `/api/enrollment` (POST)
-   `/api/enrollment/:id` (GET, DELETE)

Refer to the `routes/api` directory for a detailed list of available routes and their methods.