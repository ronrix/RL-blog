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
  description: { 
    type: String,
    require: true,
  },
  thumbnail: { 
    type: String,
    require: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    unique: true,
    ref: "User",
    default: []
  },
  reader_count: {
    type: [mongoose.Schema.Types.ObjectId],
    unique: true,
    ref: "User",
    default: []
  },
  comments: {
    type: [{
      userId: mongoose.Schema.Types.ObjectId,
      comment: String,
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date },
      replies: {
        type: [{
          userId: mongoose.Schema.Types.ObjectId,
          reply: String,
        }],
        default: []
      }
    }],
    ref: "User",
    default: []
  },
  content: String,
  category: String,
  read_duration: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default mongoose.model("Blog", BlogSchema);