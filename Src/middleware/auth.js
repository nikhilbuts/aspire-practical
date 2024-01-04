const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const employee = require("../models/employee");
const express = require("express");
const router = express.Router();

function generateToken(employee) {
  const params = { employeeId: employee.id };
  return jwt.sign(params, process.env.SECRET, { expiresIn: "1h" });
}

function authenticateJwt(req, res, next) {
  generateToken();
  next();
}

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const employee = await employee.findOne({ email });

    if (!employee) {
      return res.status(401).json({ error: `employee doesn't exist` });
    }
    if (!employee || !bcrypt.compareSync(password, employee.password)) {
      return res.status(401).json({ error: "Invalid Credentials provided" });
    }

    const token = generateToken(employee);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/protect", authenticateJwt, (req, res) => {
  res.json({
    message: "You are authorized",
  });
});

module.exports = router;
