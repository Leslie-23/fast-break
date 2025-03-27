const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    }, // Links menu to seller
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String }, // Example: "Breakfast", "Snacks", "Drinks"
    image: { type: String }, // Store image URL if applicable
    available: { type: Boolean, default: true }, // Whether item is available
  },
  { timestamps: true }
);

module.exports = mongoose.model("MenuItem", MenuItemSchema);
