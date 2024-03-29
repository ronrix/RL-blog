import { ObjectId } from "mongoose";

export type BlogType = {
  user: UserType;
  title: String;
  description: String;
  thumbnail: String;
  content: String;
  category: String;
  read_duration: String;
}

export type UserType = {
  id: ObjectId;
  username: String;
  avatar: String;
  email: String;
  password: String,
  description?: String;
  following?: [ObjectId];
  followers?: [String];
  links?: [String];
  bookmarks?: [String];
}