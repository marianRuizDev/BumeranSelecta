const Sequelize = require("sequelize");
// para seedear la db tirar comando desde api/config //

const { DB_USER, DB_HOST, DB_PASSWORD } = process.env;

const db = new Sequelize("bumeranSelecta", "root", "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", {
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
