"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const express_graphql_1 = require("express-graphql");
const schema_1 = tslib_1.__importDefault(require("./schema/schema"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use((0, cors_1.default)({ credentials: true, origin: "http://localhost:5173" }));
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.default,
    graphiql: process.env.NODE_ENV === "development"
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map