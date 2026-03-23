require("dotenv").config();
const express = require("express");
const connectDB = require("./db.js");
const cors = require("cors");
const helmet = require('helmet')
const errorHandler = require('./middleware/errorHandler.js')
const app = express();

connectDB();

//security middleware
app.use(helmet())

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/product.route.js"));

app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.use(errorHandler)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

