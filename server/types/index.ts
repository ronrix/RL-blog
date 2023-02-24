import { ObjectId } from "mongoose";

export type BlogType = {
  user_id: ObjectId;
  title: String;
  thumbnail: String;
  content: String;
  category: String;
  read_duration: String;
}

export type UserType = {
  id: ObjectId;
  username: String;
  email: String;
  password: String,
  description: String;
  followers: [String];
  links: [String];
  bookmarks: [String];
}