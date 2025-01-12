const mongoose = require("mongoose");
const dotenv = require('dotenv')

dotenv.config()
const uri = process.env.CONNECT;

async function connecttoDB() {
  if (!uri) {
    console.error("MongoDB URI is not defined in the environment variables.");
    throw new Error("MongoDB URI is missing!");
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    throw err;
  }
}

module.exports = connecttoDB;
