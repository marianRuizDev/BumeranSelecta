const Recruiter = require('./Recruiter');
const Search = require('./Search');

Search.belongsTo(Recruiter);

module.exports = {
  Recruiter,
  Search,
};
