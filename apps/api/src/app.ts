import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import "dotenv/config";
import "reflect-metadata";

import {
  CivicAPIResolver,
  KnowledgeGraphAPIResolver,
  OpenSecretsAPIResolver,
  IntegraResolver,
} from "./resolvers";
import dataSources from "./datasources";
import { startServer } from "./utils";
import { resolvers, prisma } from "database";

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers: [
      CivicAPIResolver,
      KnowledgeGraphAPIResolver,
      OpenSecretsAPIResolver,
      ...resolvers,
      IntegraResolver,
    ],
    validate: false,
  });

  const apolloServer = new ApolloServer({
    schema,
    context: {
      prisma,
    },
    dataSources,
  });
  await apolloServer.start();
  const app = startServer();
  apolloServer.applyMiddleware({ app });

  app.listen(8080, () => {
    console.log("server started on http://localhost:8080/graphql");
  });
};

bootstrap().catch((err) => console.error(err));
