# Hospital API

This is a REST API designed for a Hospital to manage the health records of COVID-19 patients. It allows the hospital staff (doctors) to register and log in, register patients, and create reports for each visit. It also provides endpoints to retrieve a patient's records and all reports filtered by status.
The API is built using Node.js and MongoDB, and uses JSON Web Tokens (JWT) for authentication.

## Installation

To install and run the application, follow the steps below:

1. Clone the repository 
2. Navigate to the project directory
3. Install the dependencies - `npm install`
4. Create a `.env` file in the root directory with the following environment variables: -
    - `PORT=5000`
    - `JWT_SECRET=<your_jwt_secret>`
5. Start the server: `npm start`
6. Open the app in your web browser at `http://localhost:5000`

## Dependencies

Requires the following dependencies:

-   `dotenv` - Loads environment variables from a `.env` file
-   `express` - Web framework for Node.js
-   `jsonwebtoken` - Generates and verifies JSON web tokens (JWTs)
-   `mongoose` - ODM (Object-Document Mapping) library for MongoDB and Node.js
-   `passport` - Authentication middleware for Node.js
-   `passport-jwt` - Passport strategy for authenticating with a JSON Web Token (JWT)

## API Routes

### Doctor

-   **POST** `/doctors/register` - Register a new doctor with a username and password.
-   **POST** `/doctors/login` - Login with a username and password to receive a JWT.


### Patients

-   **POST** `/patients/register` - Register a new patient with a phone number. If the patient already exists, the existing patient info is returned.
-   **POST** `/patients/:id/create_report` - Create a new report for the patient with the given id, which includes the status and the date. The report is created by the doctor who is currently authenticated.
-   **GET** `/patients/:id/all_reports` - List all the reports for the patient with the given id, sorted from oldest to newest.

### Reports

-   **GET** `/reports/:status` - List all the reports for all patients with the given status. The reports are sorted from oldest to newest.

## Deployment

Link - https://hospital-a16z.onrender.com

