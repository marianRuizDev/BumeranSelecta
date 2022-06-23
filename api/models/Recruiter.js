const S = require('sequelize');
const db = require('../config/db');

class Recruiter extends S.Model {}

Recruiter.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastName: {
      type: S.STRING,
      allowNull: false,
    },
    country: {
      type: S.STRING,
      allowNull: true,
    },
    description: {
      type: S.TEXT,
      allowNull: true,
    },
    experienceField: {
      type: S.STRING,
      allowNull: true,
    },
    rating: {
      type: S.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: 'recruiter',
  }
);

module.exports = Recruiter;
