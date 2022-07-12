'use strict';
const S = require('sequelize');
const db = require('../config/db');

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
    startDate: {
      type: S.DATEONLY,
    },
    finishDate: {
      type: S.DATEONLY,
    },
    searchTime: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'Search',
  }
);

Search.beforeCreate((search) => {
  let date = new Date();
  return (search.startDate = date.toISOString().split('T')[0]);
});

module.exports = Search;
