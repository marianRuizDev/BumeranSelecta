'use strict';
const S = require('sequelize');
const db = require('../config/db');
const Recruiter = require('./Recruiter');

class Search extends S.Model {}

Search.init(
  {
    position: {
      type: S.STRING,
    },
    description: {
      type: S.TEXT,
    },
    vacancies: {
      type: S.INTEGER,
    },
    time: {
      type: S.DATEONLY,
    },
    jobSchedules: {
      type: S.STRING,
    },
    salary: {
      type: S.INTEGER,
    },
    title: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'Search',
  }
);

module.exports = Search;
