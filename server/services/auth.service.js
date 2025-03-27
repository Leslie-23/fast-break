const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const registerUser = async (
  // name,
  email,
  firstName,
  lastName,
  password,
  role
) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    role,
  });
  await newUser.save();

  return generateToken(newUser._id, newUser.role);
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid email or password");

  return generateToken(user._id, user.role);
};

const generateToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { registerUser, loginUser };
