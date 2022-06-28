"use strict";
const s = require("sequelize");
const db = require("../../config/db");

class Recruiter extends s.Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
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
