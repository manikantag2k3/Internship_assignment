const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use mongoose.connect to establish a connection to MongoDB
    const conn = await mongoose.connect("mongodb://0.0.0.0:27017/internship", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
