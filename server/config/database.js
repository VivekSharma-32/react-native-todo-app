const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to databse ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`error in connection with DB ${error}`);
  }
};

module.exports = connectDB;
