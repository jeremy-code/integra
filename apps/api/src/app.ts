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
import { startServer, logger } from "./utils";
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
    plugins: [logger],
    dataSources,
    cache: "bounded",
  });
  await apolloServer.start();
  const app = startServer();
  apolloServer.applyMiddleware({ app });

  app.listen(8080, () => {
    logger.info(
      "Server is listening on port 8080: http://localhost:8080/graphql"
    );
  });
};

bootstrap().catch((err) => console.error(err));
