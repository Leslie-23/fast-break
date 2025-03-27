// const express = require("express");
// const {
//   registerUser,
//   loginUser,
//   getProfile,
//   updateProfile,
//   getAllUsers,
// } = require("../controllers/auth.controller");
// const { protect, authorizeRoles } = require("../middleware/auth.middleware");

// const router = express.Router();

// router.post("/register", registerUser); // Public
// router.post("/login", loginUser); // Public
// router.post("/logout", (req, res) => res.json({ message: "Logged out" })); // Client handles logout

// router.get("/profile", protect, getProfile); // Authenticated users only
// router.put("/update-profile", protect, updateProfile); // Authenticated users only
// router.get("/users", protect, authorizeRoles("admin"), getAllUsers); // Admin only

// module.exports = router;

const express = require("express");
const {
  register,
  login,
  logout,
  getProfile,
  updateProfile,
  getAllUsers,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", getProfile);
router.put("/update-profile", updateProfile);
router.get("/users", getAllUsers); // Admin only

module.exports = router;
