require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const sellerRoutes = require("./routes/seller.routes");
const menuRoutes = require("./routes/menu.routes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/sellers", sellerRoutes);
app.use("/api/menu", menuRoutes); // Menu management

module.exports = app;

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
