const mongoose = require("mongoose");
const URL = "mongodb://localhost:27017/mydatabase";

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected!");
  } catch (error) {
    console.error(`Database connection error: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
