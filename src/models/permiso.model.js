const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Permisos extends Model {}

Permisos.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: DataTypes.TEXT,
    level: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "permisos",
  }
);

module.exports = Permisos;
