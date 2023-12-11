const express = require("express");
const router = express.Router();

const {
  addComment,
  getAllComments,
  getCommentById,
} = require("../controllers/commentController");

router.get("/", getAllComments);
router.get("/:id", getCommentById);
router.post("/", addComment);

module.exports = router;
