import { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } from "graphql";
import { clients, projects } from "../sampleData";

// Project Type
const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        return projects.find(client => client.id === args.id);
      }
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return clients;
      }
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        return clients.find(client => client.id === args.id);
      }
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery
});
