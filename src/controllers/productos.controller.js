const Productos = require("../models/product.model");

const obtenerProductos = async () => {
  try {
    const productos = await Productos.findAll();
    return productos;
  } catch (err) {
    throw new Error(err);
  }
};

const obtenerProductoPorId = async (id) => {
  try {
    const producto = await Productos.findByPk(id);
    return producto;
  } catch (err) {
    throw new Error(err);
  }
};

const guardarProducto = async ({ nombre, codigo, precio }) => {
  try {
    const producto = await Productos.create({
      nombre,
      codigo,
      precio,
    });
    return producto;
  } catch (err) {
    throw new Error(err);
  }
};

const actualizarProducto = async (id, { nombre, descripcion, precio }) => {
  try {
    const producto = await Productos.findByPk(id);
    await producto.update({ nombre, descripcion, precio });
    return producto;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  actualizarProducto,
  guardarProducto,
  obtenerProductoPorId,
  obtenerProductos,
};
