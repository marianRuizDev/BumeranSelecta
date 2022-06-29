"use strict";
const { Model, DataTypes } = require("sequelize");
const db = require("../../config/db");
const bcrypt = require("bcrypt");

class Recruiter extends Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

Recruiter.init(
  {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    country: DataTypes.STRING,
    description: DataTypes.TEXT,
    experienceField: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    activeSearchs: DataTypes.INTEGER,
    salt: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "Recruiter",
  }
);

Recruiter.beforeCreate((recruiter) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      recruiter.salt = salt;
      return recruiter.hash(recruiter.password, salt);
    })
    .then((hash) => {
      recruiter.password = hash;
    });
});

module.exports = Recruiter;
