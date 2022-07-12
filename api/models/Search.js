"use strict";
const S = require("sequelize");
const db = require("../config/db");
const Recruiter = require("./Recruiter");

class Search extends S.Model {}

Search.init(
  {
    position: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.TEXT,
      allowNull: false,
    },
    vacancies: {
      type: S.INTEGER,
      allowNull: false,
    },
    time: {
      type: S.DATEONLY,
      allowNull: true,
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
    startDate: {
      type: S.DATEONLY,
    },
    finishDate: {
      type: S.DATEONLY,
    },
    searchTime: {
      type: S.STRING,
    },
    candidates: {
      type: S.STRING,
      allowNull: true,
    },
    ratingRecruiter: {
      type: S.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "Search",
  }
);

module.exports = Search;
