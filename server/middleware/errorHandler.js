const errorHandler = (err, req, res, next) => {
  res.status(err.satusCode || 500).json({
    message: err.message || "Server error",
  });
};

module.exports = errorHandler;