const express = require('express');
const router = express.Router();
const search = require('./searchRouter');
const recruitersAri = require('./recruiterRouter');


const recruiters = require('./recruiter');

router.use('/recruiter', recruitersAri);
router.use('/search', search);

router.use('/recruiter', recruiters); // MODULARIZADA EN recruitersAri

module.exports = router;
