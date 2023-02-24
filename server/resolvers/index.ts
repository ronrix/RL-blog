import { GraphQLError } from "graphql";
import Blog from "../models/Blog";
import User from "../models/User";
import { BlogType, UserType } from "../types";
import jwt from "jsonwebtoken";

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
        const user: any = await User.findOne({ username: args.username, email: args.email, password: args.uid });
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
        return { msg: "Successfully logout", status: 200 };
      } catch(err) {
        return new GraphQLError('Something went wrong!', {
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
        const user = new User(args); 
        await user.save();

        // create a token with the user
        const token = await jwt.sign({id: user.id, usernmae: user.username, email: user.email}, process.env.SECRET_KEY, { expiresIn: "10h" });
        context.res.cookie("token", token, { httpOnly: true });
        context.res.cookie("c_user", user.id);

        return { id: 1, username: user.username, email: user.email, description: user.description };
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

    createBlog: async (parent: any, args: BlogType, context: any, info: any) => {
      try {
        const blog = new Blog(args);
        await blog.save();
        return { user_id: args.user_id, content: args.content, category: args.category, read_duration: args.read_duration };
      } catch(err: any) {
        return new GraphQLError("Something went wrong!", {
          extensions: {
            code: "INTERNAL_SERVER_ERROR"
          }
        })
      }
    }
  }
};