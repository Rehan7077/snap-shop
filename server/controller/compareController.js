const asyncHanlder = require("../middleware/asyncHandler");
const { compareService } = require("../service/compareService");
const compareContoller = asyncHanlder(async (req, res) => {
  let { search } = req.query;
  if (search !== "string") {
    search = "";
  }
  if (!search) {
    res.status(400).json({
      message: "Search term is required",
    });
  }
  let data = await compareService(search);
  res.json(data);
});

module.exports = { compareContoller };
