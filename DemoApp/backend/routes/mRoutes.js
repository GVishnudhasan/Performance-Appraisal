const express = require("express");
const router = express.Router();
const Controller = require('../controllers/mController.js');

router.post("/login", Controller.login);
router.post("/signup", Controller.signup);
router.post("/test", Controller.test);

module.exports = router;