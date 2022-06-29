const express = require("express");
const router = express.Router();
const recruiterControllers = require("../controllers/recruiterControllers");
const passport = require("passport");




router.post("/register", recruiterControllers.register);
router.post("/login",passport.authenticate("local"), recruiterControllers.login);
router.post("/logout", recruiterControllers.logout);







module.exports = router;