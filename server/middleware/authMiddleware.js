const jwt = require("jsonwebtoken");
const User = require("../models/User.model"); // Import User model
require("dotenv").config();

// Middleware to verify JWT token
const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from header
    if (!token)
      return res.status(401).json({ message: "Not authorized, no token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = await User.findById(decoded.id).select("-password"); // Attach user info to request
    if (!req.user) return res.status(401).json({ message: "User not found" });

    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized, invalid token" });
  }
};

// Middleware to check roles
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Forbidden: You don't have permission" });
    }
    next();
  };
};

module.exports = { protect, authorizeRoles };
