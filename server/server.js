require("dotenv").config();
const express = require("express");
const connectDB = require("./db.js");
const cors = require("cors");
const helmet = require("helmet");
const errorHandler = require("./middleware/errorHandler.js");

const app = express();

connectDB();
app.use(helmet());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/product.route.js"));

app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.post("/test", async (req, res) => {
  res.json({
    message: "Server is working",
    data: req.body,
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
