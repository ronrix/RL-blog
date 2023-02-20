import mongoose from "mongoose";

async function connectDB() {
  const conn = await mongoose.connect(`${process.env.MONGO_URI}`)

  console.log(`MongoDB connected: ${conn.connection.host}`);
}

export default connectDB;
