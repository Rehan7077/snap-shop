const errorHandler = (err, res, res, next) => {
  res.status(err.satusCode || 500).json({
    message: err.message || "Server error",
  });
};

module.exports = errorHandler;