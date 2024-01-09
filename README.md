# Aspire Node Practical

Employee Crud App

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm

### Installing

1. Clone the repository:

   ```bash
   git clone https://github.com/nikhilbuts/aspire-practical.git
   ```

2. Install require packages using below command:

   `npm install`

3. Run the Application:

   `npm start`

Used Tech & Libraries:

1. Node.js
2. ExpressJs
3. MongoDb for the Database

API Endpoints:

_Create Employee_

Request :

```
POST /employees
Content-Type: application/json
Authorization: Bearer YourAccessToken

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword",
  "profilePicture": (file attachment),
  "phoneNumber": "1234567890",
  "gender": "Male",
  "education": "Bachelor's Degree",
  "projects": [
    {"name": "Project1", "designation": "Developer"},
    {"name": "Project2", "designation": "Senior Developer"}
  ]
}

```

Response:

````{
  "success": true,
  "message": "Employee created successfully",
  "employee": {
    // Employee details
  }
}```

*Get Employees*

`
GET /employees
Authorization: Bearer YourAccessToken
`

Response
````

     {
     "success": true,
     "employees": [
     // List of employee details
     ]
     }

```

```
