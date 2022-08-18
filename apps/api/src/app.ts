import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import "dotenv/config";
import "reflect-metadata";

import {
  CivicAPIResolver,
  KnowledgeGraphAPIResolver,
  OpenSecretsAPIResolver,
} from "./resolvers";
import dataSources from "./datasources";
import { startServer } from "./utils";

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers: [
      CivicAPIResolver,
      KnowledgeGraphAPIResolver,
      OpenSecretsAPIResolver,
    ],
  });

  const apolloServer = new ApolloServer({
    schema,
    dataSources,
  });
  await apolloServer.start();

  const app = startServer();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server started on http://localhost:4000/graphql");
  });
};

bootstrap().catch((err) => console.error(err));
