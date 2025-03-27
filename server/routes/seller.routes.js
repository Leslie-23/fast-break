const express = require("express");
const {
  registerSeller,
  getAllSellers,
  getSellerById,
  updateSeller,
  deleteSeller,
} = require("../controllers/seller.controller");

const router = express.Router();

router.post("/register", registerSeller);
router.get("/", getAllSellers);
router.get("/:id", getSellerById);
router.put("/:id", updateSeller);
router.delete("/:id", deleteSeller);

module.exports = router;
