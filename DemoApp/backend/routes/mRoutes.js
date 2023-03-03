const express = require("express");
const router = express.Router();
const Controller = require('../controllers/mController.js');
const User = require("../model/User");
const auth = require("../authServer");

router.post("/login", Controller.login);
router.post("/signup", Controller.signup);
// router.post('/req-reset-password', auth.ResetPassword);
// router.post('/new-password', auth.NewPassword);
// router.post('/valid-password-token', auth.ValidPasswordToken);
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