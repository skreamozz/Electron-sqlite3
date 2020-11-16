const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Permisos extends Model {}

Permisos.init();

module.exports = Permisos;
