import { GraphQLString } from "graphql";
import { UserType } from "../types";
import User from "../models/User";

export default {
  user: {
    type: UserType,
    args: { id: { type: GraphQLString } },
    resolve(parent: any, args: any) {
      return User.findById(args.id, "_id username email");
    },
  },
};
