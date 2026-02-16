
const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: String,
  price: Number,
  buyLink: String,
});

const productSchema = new mongoose.Schema({
  title: String,
  model: String,
  variant: String,
  image: String,
  stores: [storeSchema],
});

module.exports = mongoose.model("Product", productSchema);
