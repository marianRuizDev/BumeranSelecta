"use strict";
const { Model, DataTypes } = require("sequelize");
const db = require("../../config/db");

class Search extends Model {}

Search.init(
  {
    country: DataTypes.STRING,
    area: DataTypes.STRING,
    position: DataTypes.STRING,
    description: DataTypes.TEXT,
    vacancies: DataTypes.INTEGER,
    status: DataTypes.STRING,
    time: DataTypes.DATEONLY,
    jobSchedules: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    title: DataTypes.STRING,
    category: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "Search",
  }
);

module.exports = Search;
