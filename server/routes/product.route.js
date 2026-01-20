const express = require("express");
const Product = require("../models/product");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({
      message: "failed to fetch products",
    });
  }
});
router.get("/products", async (req, res) => {
  try {
    const { search } = req.query;
    if (typeof search !== "string") {
      search = "";
    }
    const filter = {};

    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }
    const products = awaitProduct.find({ filter });
    res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;
