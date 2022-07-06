const db = require("./db");

//models
const Recruiter = require("../models/Recruiter");
const Search = require("../models/Search");
const Status = require("../models/Status");
const Country = require("../models/Country");
const Area = require("../models/Area");

//seeders
const seedRecruiter = require("../seeders/SeedRecruiter");
const seedSearch = require("../seeders/SeedSearch");
const SeedStatus = require("../seeders/SeedStatus");
const seedCountry = require("../seeders/SeedCountry");
const seedArea = require("../seeders/SeedArea");

//function
const setupSeed = async () => {
  try {
    console.log("starting seed");

    const recruiter = await Recruiter.bulkCreate(seedRecruiter);
    const search = await Search.bulkCreate(seedSearch);
    const status = await Status.bulkCreate(SeedStatus);
    const country = await Country.bulkCreate(seedCountry);
    const area = await Area.bulkCreate(seedArea);
    console.log("seed succesfully");
    Promise.all([recruiter, search, country, area, status]);
  } catch (error) {
    console.error(error);
  }
};

//sync table
(async () => {
  try {
    await db.sync({ force: false });
    await setupSeed();
    process.exit(0);
  } catch (error) {
    console.error(error);
    await process.exit(1);
  }
})();
