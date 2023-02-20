import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from "cors";

import { graphqlHTTP } from 'express-graphql';
import schema from "./schema";
import connectDB from './config/db';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

// connect to database
connectDB();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === "development"
}));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});