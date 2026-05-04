# University Student MIS (PEAN Stack)

A Student Management Information System built with **PostgreSQL**, **Express.js**, **Angular 19**, and **Node.js**.

## What is in the Project?
- **Backend**: A Node.js and Express REST API that handles database interactions, authentication, and Role-Based Access Control (Admin, Faculty, Student).
- **Frontend**: An Angular 19 application with a modern Tailwind CSS UI, featuring dynamic table explorers and report generators.
- **Database**: A PostgreSQL database modeled on a university schema.

## How to Run the Project

### 1. Database Setup
1. Open **pgAdmin** and create a new database named `DB03`.
2. Execute the `university_database.sql` script inside this database to create all tables and initial data.

### 2. Backend Setup
1. Open a terminal and navigate to the `backend/` folder.
2. Update the `.env` file with your PostgreSQL credentials (`DB_USER`, `DB_PASSWORD`).
3. Run the following commands:
   ```bash
   npm install
   npm run setup   # Initializes the admin user (Username: admin, Password: admin123)
   npm start       # Starts the server at http://localhost:3000
   ```

### 3. Frontend Setup
1. Open a new terminal and navigate to the `frontend/` folder.
2. Run the following commands:
   ```bash
   npm install
   npm start       # Launches the application at http://localhost:4200
   ```
