import Express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema, Ctx, Query, Resolver } from "type-graphql";

import "dotenv/config";
import "reflect-metadata";

import dataSources from "./datasources";

import { Representative } from "./entity/Representative";

type Context = {
  dataSources: ReturnType<typeof dataSources>;
};

@Resolver()
class HelloResolver {
  @Query(() => String)
  async hello(): Promise<string> {
    return "Hello World";
  }
}

@Resolver()
class CivicResolver {
  @Query(() => [Representative])
  async representatives(@Ctx() context: Context): Promise<Representative[]> {
    const res = await context.dataSources.civicAPI.getRepresentatives(
      "9181 tropic dr westminster ca 92683"
    );
    return res.officials;
  }
}

const startServer = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver, CivicResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
    dataSources,
  });

  await apolloServer.start();

  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server started on http://localhost:4000/graphql");
  });
};

startServer().catch((err) => console.error(err));
