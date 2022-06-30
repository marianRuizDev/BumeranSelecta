'use strict';
const S = require('sequelize');
const db = require('../config/db');
const Recruiter = require('./Recruiter');

class Search extends S.Model {}

Search.init(
  {
    country: {
      type: S.STRING,
    },
    area: {
      type: S.STRING,
    },
    position: {
      type: S.STRING,
    },
    description: {
      type: S.TEXT,
    },
    vacancies: {
      type: S.INTEGER,
    },
    status: {
      type: S.STRING,
      defaultValue: 'Open',
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
    category: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'Search',
  }
);

module.exports = Search;
