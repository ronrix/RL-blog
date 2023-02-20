import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import cookieParser from "cookie-parser";
import { json } from "body-parser";
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServer } from "@apollo/server";
import http from "http";

import { applyMiddleware } from 'graphql-middleware';

import connectDB from './config/db';
import typeDefs from "./typedefs";
import resolvers from "./resolvers";
import { shield, rule } from 'graphql-shield';
import { makeExecutableSchema } from '@graphql-tools/schema';

dotenv.config();
interface MyContext {
  token?: String;
}

const main = async () => {
  const app: Express = express();
  const port = process.env.PORT || 5000;

  // connect to database
  connectDB();

  const httpServer = http.createServer(app);

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const isAuthenticated = rule()(async (parent: any, args: any, ctx: any, info: any) => {
    return false;
  });
  const permissions = shield({
    Query: {
      hello: isAuthenticated,
    },
  });
  const permissionSchema = applyMiddleware(schema, permissions);
  const server = new ApolloServer<MyContext>({
    schema: permissionSchema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
  app.use(cookieParser());
  app.use(
    '/graphql',
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.cookies['token'] }),
    }),
  );
  
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
}

main();