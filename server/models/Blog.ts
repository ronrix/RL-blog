import mongoose from "mongoose";
import { CategorySchema } from "./Category";
import { UserSchema } from "./User";

export const BlogSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  content: String,
  category: String,
  read_duration: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default mongoose.model("Blog", BlogSchema);