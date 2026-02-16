const express = require("express");
const Product = require("../models/product");
const router = express.Router();

router.get("/products", async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({
        message: "Missing required paramter: 'id'",
      });
    }

    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});

module.exports = router;
