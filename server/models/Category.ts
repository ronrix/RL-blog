import mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema({
  category_name: { 
    type: String,
    unique: true
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default mongoose.model("Category", CategorySchema);