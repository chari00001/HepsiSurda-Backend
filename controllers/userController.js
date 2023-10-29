const User = require("../models/Users");

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 

module.exports = {
  createUser,
  createUser1,
};
