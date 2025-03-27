const User = require("../models/User.model");
const Shop = require("../models/Shop.model");
const Seller = require("../models/Seller.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Register as Seller & Create a Shop
const registerSeller = async (req, res) => {
  try {
    const { firstName, lastName, email, password, shopName } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create seller user
    const seller = await User.create({
      firstName,
      lastName,
      shopName,
      email,
      password: hashedPassword,
      role: "seller",
    });

    // Create shop and link to seller
    const shop = await Shop.create({ name: shopName, owner: seller._id });
    seller.shop = shop._id;
    await seller.save();

    // Generate JWT
    const token = jwt.sign(
      { id: seller._id, role: seller.role },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.status(201).json({ message: "Seller registered", token, seller, shop });
  } catch (error) {
    res.status(500).json({ message: error.message, stack: error.stack });
  }
};

// Get all sellers
const getAllSellers = async (req, res) => {
  try {
    const sellers = await Seller.find().select("-password");
    res.json(sellers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific seller by ID
const getSellerById = async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id).select("-password");
    if (!seller) return res.status(404).json({ message: "Seller not found" });
    res.json(seller);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update seller details
const updateSeller = async (req, res) => {
  try {
    const seller = await Seller.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!seller) return res.status(404).json({ message: "Seller not found" });
    res.json({ message: "Seller updated successfully", seller });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete seller (Admin Only)
const deleteSeller = async (req, res) => {
  try {
    const seller = await Seller.findByIdAndDelete(req.params.id);
    if (!seller) return res.status(404).json({ message: "Seller not found" });
    res.json({ message: "Seller removed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  registerSeller,
  getAllSellers,
  getSellerById,
  updateSeller,
  deleteSeller,
};
