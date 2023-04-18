const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.farmers = require("./farmer.model.js")(sequelize, Sequelize);
db.buyers = require("./buyer.model.js")(sequelize, Sequelize);
db.processors = require("./processor.model.js")(sequelize, Sequelize);
//db.prices = require("./price.model.js")(sequelize, Sequelize);
//db.processors = require("./processor.model.js")(sequelize, Sequelize);
module.exports = db;