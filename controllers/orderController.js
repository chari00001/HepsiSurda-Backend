const Order = require("../models/Order");

const createOrder = async (req, res) => {
  const {
    user_id,
    products,
    total_price,
    delivery_method,
    delivery_address,
    payment_method,
    order_state,
  } = req.body;
  try {
    const order = await Order.create({
      user_id,
      products,
      total_price,
      delivery_method,
      delivery_address,
      payment_method,
      order_state,
    });
    res.status(201).json({
      message: "Order created successfully",
      status: "OK",
      order,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrderByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const order = await Order.findByUserId(userId);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderByUserId,
};
