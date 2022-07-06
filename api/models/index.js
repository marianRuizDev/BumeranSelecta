const Recruiter = require('./Recruiter');
const Search = require('./Search');
const Status = require('./Status');

Search.belongsTo(Recruiter);
Search.belongsTo(Status);

module.exports = {
  Recruiter,
  Search,
  Status,
};
