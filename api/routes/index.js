const express = require('express');
const router = express.Router();
const search = require('./search');
const recruiters = require('./recruiter');
const user = require('./user');


//Ariel prueba
const search2 = require('./searchRouter');
const recruiters2 = require('./recruitersRouter');




router.use('/recruiter', recruiters2);
router.use('/user', user);
router.use('/search2', search2);

//Fin ariel




router.use('/recruiter', recruiters);
router.use('/search', search);


module.exports = router;
