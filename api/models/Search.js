const S = require('sequelize');
const db = require('../config/db');

class Search extends S.Model {}

Search.init(
  {
    country: {
      type: S.STRING,
      allowNull: false,
    },
    area_search: {
      type: S.STRING,
      allowNull: false,
    },
    position: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.TEXT,
      allowNull: false,
    },
    vacancies: {
      type: S.STRING,
      allowNull: false,
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
      allowNull: false,
    },
    salary: {
      type: S.INTEGER,
      allowNull: false,
    },
    title: {
      type: S.STRING,
      allowNull: false,
    },
    category: {
      type: S.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'search',
  }
);

module.exports = Search;
