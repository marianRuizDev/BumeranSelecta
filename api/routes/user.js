const express = require("express");
const router = express.Router();
const RoutersUser = require("../controllers/userControllers");
const passport = require("passport");




router.post("/register", RoutersUser.register);
router.post("/login",passport.authenticate("local"), RoutersUser.login);
router.post("/logout", RoutersUser.logout);




module.exports = router;