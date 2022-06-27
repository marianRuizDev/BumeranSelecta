const express = require('express');
const router = express.Router();

const search2 = require('./searchRouter');
const search = require('./search');
const recruiters = require('./recruiter');
const user = require('./user');


//ariel prueba

router.use('/search2', search2);


router.use('/search', search);
router.use('/recruiter', recruiters);
router.use('/user', user);

module.exports = router;
