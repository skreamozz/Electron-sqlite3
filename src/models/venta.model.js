const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Ventas extends Model {}
Ventas.init();

module.exports = Ventas;
