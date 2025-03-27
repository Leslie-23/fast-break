const { registerUser, loginUser } = require("../services/auth.service");
const User = require("../models/User.model");

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;
    if (!firstName || !lastName || !email || !password)
      return res.status(400).json({ message: "All fields required" });

    const token = await registerUser(
      firstName,
      lastName,
      email,
      password,
      role || "buyer"
    );
    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "All fields required" });

    const token = await loginUser(email, password);
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.logout = async (req, res) => {
  res.json({
    message: "Logout successful (handled client-side by deleting token)",
  });
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Error fetching profile" });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { name, email },
      { new: true }
    ).select("-password");
    res.json({ message: "Profile updated", user: updatedUser });
  } catch (error) {
    res.status(400).json({ message: "Update failed" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: "Error fetching users" });
  }
};
