const S = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class Recruiter extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

Recruiter.init(
  {
    name: {
      type: S.STRING,
     
    },
    lastName: {
      type: S.STRING,
      
    },

    country: {
      type: S.STRING,
      
    },
    email: {
      type: S.STRING,
     
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
     
    },

    salt: {
      type: S.STRING,
       allowNull: true,
    },
    rol: {
      type: S.STRING,
      defaultValue: "user",
    },
  },
  {
    sequelize: db,
    modelName: "recruiter",
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
