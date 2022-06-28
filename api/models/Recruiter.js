"use strict";
const s = require("sequelize");
const db = require("../../config/db");

class Recruiter extends s.Model {}
Recruiter.init(
  {
    email: s.STRING,
    password: s.STRING,
    name: s.STRING,
    lastName: s.STRING,
    country: s.STRING,
    description: s.TEXT,
    experienceField: s.STRING,
    rating: s.INTEGER,
    activeSearchs: s.INTEGER,
  },
  {
    sequelize: db,
    modelName: "Recruiter",
  }
);

module.exports = Recruiter;
