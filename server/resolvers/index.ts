import { GraphQLError } from "graphql";
import Blog from "../models/Blog";
import User from "../models/User";
import { BlogType, UserType } from "../types";
import jwt from "jsonwebtoken";
import Category from "../models/Category";
import bcrypt from "bcrypt";

export default {
  Query: {
    hello: (parents: any, args: any, context: any, info: any) => {
      return 'Hello world!';
    },
    world: () => {
      return "Work!!"
    },
    user: (parents: any, args: any, context: any, info: any) => {
      return User.findById(args.id);
    },
    login: async (parents: any, args: any, context: any, info: any) => {
      try {
        const user: any = await User.findOne({ email: args.email });

        // check if the password provided is valid
        const valid = await bcrypt.compare(args.uid, user.password);
        if(!valid) {
          return new GraphQLError("Invalid email or password", {
            extensions: {
              code: "USER_NOT_FOUND"
            }
          });
        }

        // check if there is user found in DB
        if(!user) {
          return new GraphQLError("User not found", {
            extensions: {
              code: 'USER_NOT_FOUND',
            },
          });
        }
        // create a token with the user
        const token = await jwt.sign({id: user.id, usernmae: user.username, email: user.email}, process.env.SECRET_KEY, { expiresIn: "10h" });
        context.res.cookie("token", token, { httpOnly: true });
        context.res.cookie("c_user", user.id);

        return user;
      } catch(err) {
        console.log(err);
        return new GraphQLError('Something went wrong!', {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    },
    logout: (parents: any, args: any, context: any, info: any) => {
      // TODO: remove cookie token
      try {
        context.res.clearCookie("token");
        context.res.clearCookie("c_user");
        return { msg: "Successfully logout", status: 200 };
      } catch(err) {
        return new GraphQLError('Something went wrong!', {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    },
    getUserBlogs: async (parent: any, args: any, context: any, info: any) => {
      try {
        const blogs = await Blog.find({ user: args.user_id }).populate("user");
        return blogs;
      } catch(err) {
        return new GraphQLError('Something went wrong!', {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    }, 
    getAllBlogs: async (parent: any, args: any, context: any, info: any) => {
      try {
        const blogs = await Blog.find().populate("user");
        return blogs;
      } catch(err) {
        return new GraphQLError('Something went wrong!', {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    },
    getBlog: async (parent: any, args: any, context: any, info: any) => {
      try {
        const blog = await Blog.findOne({ _id: args.id, title: args.title }).populate("user");
        return blog;
      } catch(err) {
        return new GraphQLError('Something went wrong!', {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    },
    getTrendingBlogs: async (parent: any, args: any, context: any, info: any) => {
      const TRENDING_VIEWS = 10;

      try {
        const trendingBlogs = await Blog.find({ reader_count: { $gt: TRENDING_VIEWS } }).populate("user").sort({ reader_count: -1 });
        return trendingBlogs;
      } catch (err: any) {
        return new GraphQLError(err.message, {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    },
    getAllCategories: async (parent: any, args: UserType, context: any, info: any) => {
      try {
        const categories = await Category.find();
        return categories;
      } catch (err: any) {
        return new GraphQLError(err.message, {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    },
    readCount: async (parent: any, args: any, context: any, info: any) => {
      try {
        const userId = context.req.cookies["c_user"];
        await Blog.findByIdAndUpdate({ _id: args.blogId }, { $addToSet: { reader_count: userId }}).exec();

        return { msg: "success", status: 201 };
      } catch (err: any) {
        return new GraphQLError(err.message, {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    },

    like: async (parent: any, args: any, context: any, info: any) => {
      try {
        const userId = context.req.cookies["c_user"];
        await Blog.findByIdAndUpdate(args.blogId, { $addToSet: { likes: userId }}).exec();
        
        return { msg: "success", status: 201 };
      } catch (err: any) {
        return new GraphQLError(err.message, {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    },

    unlike: async (parent: any, args: any, context: any, info: any) => {
      try {
        const userId = context.req.cookies["c_user"];
        await Blog.findByIdAndUpdate(args.blogId, { $pull : { likes: userId } }).exec();
        
        return { msg: "success", status: 201 };
      } catch (err: any) {
        return new GraphQLError(err.message, {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    },
      
    saveToBookmark: async (parent: any, args: any, context: any, info: any) => {
      try {
        const userId = context.req.cookies["c_user"];
        await User.findByIdAndUpdate(userId, { $addToSet: { bookmarks: args.blogId } }).exec();

        return { msg: "success", status: 201 };
      } catch (err: any) {
        return new GraphQLError(err.message, {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    },
      
    unSaveToBookmark: async (parent: any, args: any, context: any, info: any) => {
      try {
        const userId = context.req.cookies["c_user"];
        await User.findByIdAndUpdate(userId, { $pull: { bookmarks: args.blogId } }).exec();

        return { msg: "success", status: 201 };
      } catch (err: any) {
        return new GraphQLError(err.message, {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    },

    search: async (parent: any, args: any, context: any, info: any) => {
      try {
        const blogs = await Blog.find({ $or: [{ title: { $regex: args.searchQuery, $options: "i" }}, { category: { $regex: args.searchQuery, $options: "i" }} ]}).populate("user");
        
        return blogs;
      } catch (err: any) {
        return new GraphQLError(err.message, {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    }

  },
  Mutation: {
    addUser: async (parent: any, args: UserType, context: any, info: any) => {
      try {
        const hashed_password = await bcrypt.hash(String(args.password), 10);
        const user = new User({...args, password: hashed_password }); 
        await user.save();

        // create a token with the user
        const token = await jwt.sign({id: user.id, username: user.username, email: user.email}, process.env.SECRET_KEY, { expiresIn: "10h" });
        context.res.cookie("token", token, { httpOnly: true });
        context.res.cookie("c_user", user.id);

        return user;
      } catch(err: any) {
        if(err.code === 11000) {
          return new GraphQLError('Invalid, user already exists', {
            extensions: {
              code: 'DUPLICATE_USER',
            },
          });
        }
        return new GraphQLError('Something went wrong!', {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    },

    completeProfile: async (parent: any, args: UserType, context: any, info: any) => {
      try {
        const userId = context.req.cookies["c_user"];
        const user = await User.findOneAndUpdate({ _id: userId }, { username: args.username, description: args.description, links: args.links }, { returnDocument: "after" }).exec();

        return user;
      } catch (err: any) {
        return new GraphQLError('Something went wrong!', {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    },

    follow: async (parent: any, args: any, context: any, info: any) => {
      try {
        const userId = context.req.cookies["c_user"];
        // put the id of the blog user to the authenticated user following table
        await User.findOneAndUpdate({ _id: userId }, { $addToSet: { following: args.id } }).exec();
        // put the id of the authenticated user to the followers table of the blog user
        await User.findOneAndUpdate({_id: args.id }, { $addToSet: { followers: userId } }).exec();

        return { msg: "follow success", status: 201 };
      } catch (err: any) {
        return new GraphQLError('Something went wrong!', {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    },

   unfollow: async (parent: any, args: any, context: any, info: any) => {
      try {
        const userId = context.req.cookies["c_user"];
        // removed the id of the blog user to the authenticated user following table
        await User.findOneAndUpdate({ _id: userId }, { $pull: { following: args.id } }).exec();
        // remove the id of the authenticated user to the followers table of the blog user
        await User.findOneAndUpdate({_id: args.id }, { $pull: { followers: userId } }).exec();

        return { msg: "unfollow success", status: 201 };
      } catch (err: any) {
        console.log(err);
        return new GraphQLError('Something went wrong!', {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
      }
    },

    createBlog: async (parent: any, args: BlogType, context: any, info: any) => {
      try {
        const blog = new Blog(args);
        await blog.save();

        // store the new category to DB
        // if category already exists in DB, then ignore
        const categoryExists = await Category.findOne({category_name: args.category});
        if(!categoryExists) {
          const category = new Category({ category_name: args.category });
          await category.save();
        }

        return blog.populate("user");
      } catch(err: any) {
        console.log("ERROR:", err);
        if(err) {
          console.log("yes error.");
        }
        return new GraphQLError("Something went wrong!", {
          extensions: {
            code: "INTERNAL_SERVER_ERROR"
          }
        })
      }
    }
  }
};