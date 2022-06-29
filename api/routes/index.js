const express = require("express");
const router = express.Router();
const search = require("./searchRouter");
const recruiters = require("./recruiterRouter");
const admin = require("./admin");



router.use("/recruiter", recruiters);
router.use("/admin", admin);
router.use("/search", search);

module.exports = router;
