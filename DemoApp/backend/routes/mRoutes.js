const express = require("express");
const router = express.Router();
const Controller = require('../controllers/mController.js');
const User = require("../model/User");
const ResetPassword = require("../model/resetToken");
const auth = require("../authServer");

router.post("/login", Controller.login);
router.post("/signup", Controller.signup);
router.post('/req-reset-password', Controller.ResetPassword);
router.post('/new-password', Controller.NewPassword);
router.post('/valid-password-token', Controller.ValidPasswordToken);
router.get("/show", auth, async (req, res) => {
    try {
      // request.user is getting fetched from Middleware after token authentication
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
  });

module.exports = router;