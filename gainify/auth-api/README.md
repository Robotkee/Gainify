# Auth API

This project is an authentication API built with Node.js and Express. It provides endpoints for user registration and login.

## Project Structure

```
auth-api
├── src
│   ├── controllers
│   │   ├── authController.js
│   ├── routes
│   │   ├── authRoutes.js
│   ├── models
│   │   └── user.js
│   └── app.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/auth-api.git
   ```
2. Navigate to the project directory:
   ```
   cd auth-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoints

### Register User

- **Endpoint:** `POST /api/register`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string"
  }
  ```
- **Response:**
  - Success: `201 Created`
  - Error: `400 Bad Request`

### Login User

- **Endpoint:** `POST /api/login`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  - Success: `200 OK`
  - Error: `401 Unauthorized`

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.