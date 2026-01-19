require("dotenv").config();
const express = require("express");
const connectDB = require("./db.js");
const cors = require("cors");

const app = express();

connectDB();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use('/products',require('./routes/product.route.js'))

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
