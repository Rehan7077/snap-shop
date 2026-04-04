const asyncHanlder = require("../middleware/asyncHandler");
const compareService = require("../service/compareService");
const compareContoller = asyncHanlder(async (req, res) => {
  let product = req.query.search;

  if (!product) {
    return res.status(400).json({
      message: "Search term is required",
    });
  }
  let data = await compareService(product);
  product = ''
  return res.json(data);
  
});

module.exports = compareContoller;
