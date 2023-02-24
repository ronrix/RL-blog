import mongoose from "mongoose";

export const BlogSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    unique: false,
  },
  content: String,
  category: String,
  read_duration: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default mongoose.model("Blog", BlogSchema);