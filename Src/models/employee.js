const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  gender: {
    type: String,
  },
  education: {
    type: String,
  },
  salary: {
    type: String,
  },
  projects: [
    {
      name: {
        type: String,
      },
      designation: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Employee", employeeSchema);
