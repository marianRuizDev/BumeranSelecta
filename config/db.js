const Sequelize = require('sequelize');

const { DB_USER, DB_HOST, DB_PASSWORD } = process.env;
console.log(process.env.DB_USER);

const db = new Sequelize('bumeranSelecta', 'root', 'password', {
  host: DB_HOST,
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;