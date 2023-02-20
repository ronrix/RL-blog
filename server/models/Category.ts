import mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema({
  category_name: String,
});

export default mongoose.model("Category", CategorySchema);