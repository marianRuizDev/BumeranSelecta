'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Search extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Search.init({
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
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Search',
  });
  return Search;
};