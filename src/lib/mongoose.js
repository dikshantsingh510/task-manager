import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("Already connected to MongoDB");
    return true;
  }
  if (connectionState === 2) {
    console.log("Connecting...");
    return true;
  }

  try {
    if (!MONGO_URI) throw new Error("Missing MONGO_URI");

    await mongoose.connect(MONGO_URI,{
      dbName:"taskManagerDB"
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
