const S = require('sequelize');
const db = require('../config/db');

class User extends S.Model {}

User.init(
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
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    role: {
      type: S.STRING,
      defaultValue: 'user',
    },
  },
  {
    sequelize: db,
    modelName: 'user',
  }
);

module.exports = User;
