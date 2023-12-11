const express = require("express");
const router = express.Router();

const {
    addToCart,
    getAllCartItems,
    getCartItemById,
    getAllCartItemsByUserId,
} = require("../controllers/cartController");

router.get("/", getAllCartItems);
router.get("/:id", getCartItemById);
router.get("/user/:userId", getAllCartItemsByUserId);
router.post("/", addToCart);

module.exports = router;
