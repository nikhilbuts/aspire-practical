const express = require("express");
const router = express.Router();

const Employee = require("../models/employee");
const validator = require("validator");

// GET
router.get("/", async (req, res) => {
  try {
    const getEmployeeDetails = await Employee.find().sort({ salary: -1 });
    console.log("get Employee Details", getEmployeeDetails);
    res.status(200).json(getEmployeeDetails);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Employee POST API
router.post("/", async (req, res) => {
  // validator
  if (!validator.isEmail(req.body.email)) {
    return res.status(400).json({
      error: "Invalid Email Address",
    });
  }

  if (!validator.isPassword(req.body.password)) {
    return res.status(400).json({
      error: "Password must be 8 character",
    });
  }

  const employee = new Employee(req.body);
  try {
    await employee.save();
    res.status(200).json({
      message: "Employee data saved",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;
