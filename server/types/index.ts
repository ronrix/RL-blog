import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";


export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    description: { type: GraphQLString },
  })
});

export const BlogType = new GraphQLObjectType({
  name: "Blog",
  fields: () => ({
    user_id: { type: GraphQLID },
    content: { type: GraphQLString },
    category: { type: GraphQLString },
    read_duration: { type: GraphQLString },
  })
});