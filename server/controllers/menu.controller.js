const MenuItem = require("../models/Menu.model");
const Seller = require("../models/Seller.model");

// Create a menu item (Only seller can create)
exports.createMenuItem = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const { name, description, price, category, image, available } = req.body;

    // Check if seller exists
    const seller = await Seller.findById(sellerId);
    if (!seller) return res.status(404).json({ message: "Seller not found" });

    // Create new menu item
    const newItem = new MenuItem({
      seller: sellerId,
      name,
      description,
      price,
      category,
      image,
      available,
    });

    await newItem.save();
    res.status(201).json({ message: "Menu item added successfully", newItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all menu items of a seller
exports.getSellerMenu = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const menuItems = await MenuItem.find({ seller: sellerId });
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific menu item by ID
exports.getMenuItemById = async (req, res) => {
  try {
    const { itemId } = req.params;
    const menuItem = await MenuItem.findById(itemId);
    if (!menuItem)
      return res.status(404).json({ message: "Menu item not found" });
    res.json(menuItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a menu item (Only seller can update)
exports.updateMenuItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const updatedItem = await MenuItem.findByIdAndUpdate(itemId, req.body, {
      new: true,
    });
    if (!updatedItem)
      return res.status(404).json({ message: "Menu item not found" });
    res.json({ message: "Menu item updated successfully", updatedItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a menu item (Only seller can delete)
exports.deleteMenuItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const deletedItem = await MenuItem.findByIdAndDelete(itemId);
    if (!deletedItem)
      return res.status(404).json({ message: "Menu item not found" });
    res.json({ message: "Menu item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
