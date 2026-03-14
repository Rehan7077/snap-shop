const express = require("express");
const Product = require("../models/product");
const router = express.Router();
const asyncHandler = require("../middleware/asyncHandler");

router.get(
  "/products",
  asyncHandler(async (req, res) => {
    let { search } = req.query;

    if (typeof search !== "string") {
      search = "";
    }

    const filter = {};

    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }

    const products = await Product.find(filter);
    res.status(200).json(products);
  })
);

router.get(
  "/products/:id",
  asyncHandler(async (req, res) => {
    if (!req.params.id) {
      return res.status(400).json({
        message: "Missing required paramter: 'id'",
      });
    }
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
  })
);

module.exports = router;
