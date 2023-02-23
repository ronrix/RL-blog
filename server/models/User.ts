import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true, 
  },
  email: {
    type: String, 
    unique: true,
  },
  avatar: {
    type: String,
  },
  description: String,
  followers: {
    type: [],
    default: []
  },
  links: {
    type: [String],
    default: []
  },
  bookmarks: {
    type: [String],
    default: []
  },
  password: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default mongoose.model("User", UserSchema);