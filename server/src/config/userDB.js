import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
const userDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      "useNewUrlParser": true,
      "useUnifiedTopology": true,
      "dbname": "perscholas"
    });
    console.log("Mongoose Connection Successful!");
  } catch (error) {
    console.log("Mongoose Connection Failed!");
  }
};

userDB();
export { userDB };