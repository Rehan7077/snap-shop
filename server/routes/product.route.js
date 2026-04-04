const express = require("express");
const compareContoller = require("../controller/compareController");
const router = express.Router();

router.get("/products", compareContoller );
module.exports = router;  