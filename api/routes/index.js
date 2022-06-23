const express = require('express');
const router = express.Router();

const search = require('./search');
const recruiters = require('./recruiters');
const user = require('./user');

router.use('/search', search);
router.use('/recruiters', recruiters);
router.use('/user', user);

module.exports = router;
