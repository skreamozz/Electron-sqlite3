const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Proveedores extends Model {}

Proveedores.init();

module.exports = Proveedores;
