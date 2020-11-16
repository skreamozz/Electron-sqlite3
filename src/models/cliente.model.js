const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Clientes extends Model {}

Clientes.init();

module.exports = Clientes;
