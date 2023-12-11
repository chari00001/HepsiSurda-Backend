const Comment = require("../models/Comments");

const addComment = async (req, res) => {
  const { text, user_id, product_id } = req.body;
  try {
    const comment = await Comment.create({
      text,
      user_id,
      product_id,
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findOne(id);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addComment,
  getAllComments,
  getCommentById,
};
