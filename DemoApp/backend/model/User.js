const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  facultyid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  totalexperience: {
    type: Number,
    required: true
  },
  mobileno: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("user", UserSchema);