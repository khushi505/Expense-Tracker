const mongoose = require("mongoose");
require("dotenv").config();

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected");
  } catch (error) {
    console.log("DB Connection Error", error);
  }
};

module.exports = { db };
