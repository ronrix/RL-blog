import mongoose from "mongoose";
import { CategorySchema } from "./Category";
import { UserSchema } from "./User";

export const BlogSchema = new mongoose.Schema({
  user_id: UserSchema,
  content: String,
  category: CategorySchema,
  read_duration: String,
});

export default mongoose.model("Blog", BlogSchema);