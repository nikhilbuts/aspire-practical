const express = require("express");
const bodyParser = require("body-parser");

// Import employee Routes
const employeeRoutes = require("./routes/employee");
const db = require("./config/db");
const authMiddleware = require("../Src/middleware/auth");

const app = express();

// // Middleware
app.use(bodyParser.json());
app.use(authMiddleware);

//Routes
app.use("/employee", employeeRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Started on the Port ${port}`);
});
