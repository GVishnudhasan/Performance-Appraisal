const express = require("express");
const router = express.Router();
const Controller = require('../controllers/mController');

router.post("/login", Controller.login);
router.post("/signup", Controller.signup);

module.exports = router;