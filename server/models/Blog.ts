import mongoose from "mongoose";

export const BlogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: false,
  },
  title: { 
    type: String,
    require: true,
  },
  thumbnail: { 
    type: String,
    require: true,
  },
  content: String,
  category: String,
  read_duration: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default mongoose.model("Blog", BlogSchema);