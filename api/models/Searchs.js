const S = require('sequelize');
// const db = require COLOCAR RUTA

class Searchs extends S.Model {}

Searchs.init(
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
        type: S.INTEGER,
        allowNull: false,
      },
      status: {
        type: S.STRING,
        defaultValue: "Open",
      },
      time: {
        type: S.DATEONLY,
      },
      jobSchedules: {
        type: S.STRING,
        allowNull: false,
      },
      salary : {
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
      modelName: "searchs",
    }
)

  
  module.exports = Searchs