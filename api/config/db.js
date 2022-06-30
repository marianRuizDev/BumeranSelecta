const Sequelize = require('sequelize');

const { DB_USER, DB_HOST, DB_PASSWORD } = process.env;

<<<<<<< HEAD
const db = new Sequelize('bumeranSelecta', 'root', 'password', {
=======
const db = new Sequelize("bumeranSelecta", "root", "password", {
>>>>>>> b52618c9c5a1f19870fb668b021373b1add63dd8
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
