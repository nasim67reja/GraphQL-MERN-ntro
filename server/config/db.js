const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DATABASE);

  console.log("Database connected successfully");
  //   console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
