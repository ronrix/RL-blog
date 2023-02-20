"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("graphql");
const queries_1 = tslib_1.__importDefault(require("../queries"));
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: Object.assign({}, queries_1.default),
});
exports.default = new graphql_1.GraphQLSchema({
    query: RootQuery
});
//# sourceMappingURL=schema.js.map