const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  facultyid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    enum: ['CSE', 'EEE', 'IT', 'Mech', 'ECE', 'BME'],
    required: true
  },
  designation: {
    type: String,
    enum: ['Head of the Department', 'Associate Professor', 'Assistant Professor', 'Director', 'Principal'],
    required: true
  },
  totalexperience: {
    type: Number,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  dateOfJoining: {
    type: Date,
    required: true
  },
  mobileno: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  },
  password: {
    type: String,
    required: true,
    match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  }
});


module.exports = mongoose.model("user", UserSchema);