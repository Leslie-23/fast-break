const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    description: { type: String },
    role: { type: String, default: "seller" }, // Role-based control
  },
  { timestamps: true }
);

module.exports = mongoose.model("Seller", SellerSchema);
