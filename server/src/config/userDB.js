import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
const userDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "perscholas"
    });
    console.log("Mongoose Connection Successful!");
  } catch (error) {
    console.error("Mongoose Connection Failed!", error.message);
    process.exit(1);
  }
};

userDB();
export { mongoose };