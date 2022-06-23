const S = require('sequelize');
// const db = require COLOCAR RUTA

class Recruiters extends S.Model {}

Recruiters.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastName: {
      type: S.STRING,
      allowNull: false,
    },
    country: {
      type: S.STRING,
      allowNull: true,
    },
    description: {
      type: S.TEXT,
      allowNull: true,
    },
    experienceField: {
      type: S.STRING,
      allowNull: true,
    },
    rating: {
      type: S.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "recruiters",
  }
)

module.exports = Recruiters;