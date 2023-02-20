import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
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
});

export default mongoose.model("User", UserSchema);