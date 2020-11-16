const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Compras extends Model {}

Compras.init();

module.exports = Compras;
