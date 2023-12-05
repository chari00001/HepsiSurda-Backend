const Cart = require("../models/Cart");

const addToCart = async (req, res) => {
  const { product_id, amount } = req.body;
  try {
    const cartItem = await Cart.create({
      product_id,
      amount,
    });
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.findAll();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCartItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const cartItem = await Cart.findOne(id);
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllCartItemsByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;
    const cartItems = await Cart.findAll({ where: { user_id } });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addToCart,
  getAllCartItems,
  getCartItemById,
  getAllCartItemsByUserId,
};

module.exports = {
  addToCart,
  getAllCartItems,
  getCartItemById,
};
