const S = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

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

   

    email: {
      type: S.STRING,
      unique: {
        msg: "El email necesita ser unico",
      },
     
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: S.STRING,
      allowNull: false,
    },

    salt: {
      type: S.STRING,
      allowNull: true,
    },
    rol: {
      type: S.STRING,
      defaultValue: "admin",
    },
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;
