const { Model, DataTypes } = require("sequelize");
const Rubro = require("./rubro.model");
const sequelize = require("../database");

class Productos extends Model {}
Productos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    precio: {
      type: DataTypes.NUMBER,
      defaultValue: 0,
    },
  },
  { sequelize, modelName: "productos" }
);
Rubro.hasOne(Productos);
Productos.belongsTo(Rubro);
module.exports = Productos;
