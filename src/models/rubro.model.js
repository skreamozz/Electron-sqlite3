const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Rubro extends Model {}
Rubro.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "rubro",
    timestamps: false,
  }
);

module.exports = Rubro;
