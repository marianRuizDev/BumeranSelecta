const db = require('./db');

//models
const Recruiter = require('../models/Recruiter');
const Search = require('../models/Search');
const Status = require('../models/Status');

//seeders
const seedRecruiter = require('../seeders/SeedRecruiter');
const seedSearch = require('../seeders/SeedSearch');
const SeedStatus = require('../seeders/SeedStatus');

//function
const setupSeed = async () => {
  try {
    console.log('starting seed');
    const recruiter = await Recruiter.bulkCreate(seedRecruiter);
    const search = await Search.bulkCreate(seedSearch);
    const status = await Status.bulkCreate(SeedStatus);
    console.log('seed succesfully');
    Promise.all([recruiter, search, status]);
  } catch (error) {
    console.log(error);
  }
};

//sync table
(async () => {
  try {
    await db.sync({ force: false });
    await setupSeed();
    process.exit(0);
  } catch (error) {
    console.log(error);
    await process.exit(1);
  }
})();
