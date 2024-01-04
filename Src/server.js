const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

// Import employee Routes
const employeeRoutes = require("./routes/employee");

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use("/employees", employeeRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Started on the Port ${port}`);
});
