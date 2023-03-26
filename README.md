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
