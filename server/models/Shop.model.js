const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    menus: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shop", shopSchema);
