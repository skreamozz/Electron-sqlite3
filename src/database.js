const { Sequelize } = require("sequelize");

const sqlite = new Sequelize("sqlite:" + __dirname + "/Productos.sqlite3");

module.exports = sqlite;
