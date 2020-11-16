const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Usuarios extends Model {}
Usuarios.init();

module.exports = Usuarios;
