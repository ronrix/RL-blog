import mongoose, { mongo } from "mongoose";

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
  following: {
    type: [mongoose.Schema.Types.ObjectId],
    unique: true,
    default: []
  },
  followers: {
    type: [mongoose.Schema.Types.ObjectId],
    unique: true,
    default: []
  },
  links: {
    type: mongoose.Schema.Types.Mixed,
    default: {} 
  },
  bookmarks: {
    type: [mongoose.Schema.Types.ObjectId],
    unique: true,
    default: []
  },
  password: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default mongoose.model("User", UserSchema);