const db = require('./db');

const Recruiter = require('../models/Recruiter');
const Search = require('../models/Search');

const seedRecruiter = require('../seeders/SeedRecruiter');
const seedSearch = require('../seeders/SeedSearch');

const setupSeed = async () => {
  try {
    console.log('starting seed');
    const recruiter = await Recruiter.bulkCreate(seedRecruiter);
    const search = await Search.bulkCreate(seedSearch);
    console.log('seed succesfully');
    Promise.all([recruiter, search]);
  } catch (error) {
    console.log(error);
  }
};

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
