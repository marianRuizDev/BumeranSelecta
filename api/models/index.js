const Recruiter = require('./Recruiter');
const Search = require('.//Search');
const Country = require('./Country');
const Area = require('./Area');

Search.belongsTo(Recruiter);
Search.belongsTo(Country);
Search.belongsTo(Area);
Recruiter.belongsTo(Country);
Recruiter.belongsTo(Area);

module.exports = {
  Recruiter,
  Search,
  Country,
  Area,
};
