"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recruiter extends Model {
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
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      country: DataTypes.STRING,
      description: DataTypes.TEXT,
      experienceField: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      activeSearchs: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Recruiter",
    }
  );
  return Recruiter;
};
