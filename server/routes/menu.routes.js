const express = require("express");
const {
  createMenuItem,
  getSellerMenu,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem,
} = require("../controllers/menu.controller");

const router = express.Router();

router.post("/:sellerId/menu", createMenuItem); // Seller creates menu item
router.get("/:sellerId/menu", getSellerMenu); // Get all menu items for seller
router.get("/:itemId", getMenuItemById); // Get single menu item
router.put("/:itemId", updateMenuItem); // Update menu item
router.delete("/:itemId", deleteMenuItem); // Delete menu item

module.exports = router;
