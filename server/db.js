const mongoose = require("mongoose");
 const conncetDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to Database");
  } catch (err) {
    console.log("failed to connect Database, error:",err);
  }
};
module.exports = conncetDB;