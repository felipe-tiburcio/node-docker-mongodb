const mongoose = require("mongoose");
const URL = "mongodb://root:password@localhost:27017/mydatabase?authSource=admin";

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected!");
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
