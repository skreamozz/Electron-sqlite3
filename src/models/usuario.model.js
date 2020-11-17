const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");
const Permisos = require("./permiso.model");
const bcrypt = require("bcrypt");
class Usuarios extends Model {}

Usuarios.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user: { type: DataTypes.TEXT, allowNull: false },
    pass: {
      type: DataTypes.TEXT,
      allowNull: false,
      set(value) {
        const hash = bcrypt.hashSync(value, 10);
        this.setDataValue("pass", hash);
      },
    },
  },
  {
    sequelize,
    modelName: "usuarios",
  }
);

Usuarios.belongsTo(Permisos);
Permisos.hasOne(Usuarios);
module.exports = Usuarios;
