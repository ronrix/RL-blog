"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const sampleData_1 = require("../sampleData");
const ProjectType = new graphql_1.GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        status: { type: graphql_1.GraphQLString },
    }),
});
const ClientType = new graphql_1.GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString },
    }),
});
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        project: {
            type: ProjectType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parent, args) {
                return sampleData_1.projects.find(client => client.id === args.id);
            }
        },
        clients: {
            type: new graphql_1.GraphQLList(ClientType),
            resolve(parent, args) {
                return sampleData_1.clients;
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parent, args) {
                return sampleData_1.clients.find(client => client.id === args.id);
            }
        },
    },
});
exports.default = new graphql_1.GraphQLSchema({
    query: RootQuery
});
//# sourceMappingURL=schema.js.map