import { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } from "graphql";
import queries from "../queries";
import mutation from "../mutation";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ...queries
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation,
});
