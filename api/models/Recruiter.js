"use strict";
const S = require("sequelize");
const db = require("../../config/db");
const bcrypt = require("bcrypt");

class Recruiter extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The models/index file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

Recruiter.init(
  {
    email: S.STRING,
    password: S.STRING,
    name: S.STRING,
    lastName: S.STRING,
    country: S.STRING,
    description: S.TEXT,
    experienceField: S.STRING,
    rating: S.INTEGER,
    activeSearchs: S.INTEGER,
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
