import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import User from "../models/User";
import { UserType } from "../types";

export default new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const user = new User({
          username: args.username,
          email: args.email,
          password: args.password,
        });
        return user.save();
      }
    }
  }
});