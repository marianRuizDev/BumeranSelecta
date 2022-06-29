const express = require("express");
const router = express.Router();
const search = require("./searchRouter");
const recruitersAri = require("./recruiterRouter");
const admin = require("./admin");

const recruiters = require("./recruiter");
//const user = require('./user');

router.use("/recruiter", recruitersAri);
router.use("/search", search);
router.use("/recruiter", recruiters);
//router.use('/user', user);

module.exports = router;
