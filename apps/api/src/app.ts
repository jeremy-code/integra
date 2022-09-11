import "reflect-metadata";
import "dotenv/config";

import { ApolloServer, ExpressContext } from "apollo-server-express";
import { EventEmitter } from "events";

import type { Application } from "express";

import { schema } from "./schema";
import { PORT } from "./config";
import { prisma } from "database";
import { startServer, logger } from "./utils";
import dataSources from "./datasources";
import { mongoDB } from "./services";

/**
 * Express application wrapper class to centralize initialization
 */
class App extends EventEmitter {
  public app: Application;

  constructor() {
    super();
    this.app = startServer();
    this.setupApollo();
  }

  listen() {
    this.app.listen(PORT, () => {
      logger.info(`⚡ Server is listening on port ${PORT}`);
    });
  }

  async setupApollo() {
    const apolloServer = new ApolloServer({
      schema,
      dataSources,
      context: ({ req, res }: ExpressContext) => ({
        req,
        res,
        prisma,
        mongoDB: new mongoDB("integra", "official"),
      }),
      plugins: [logger],
      csrfPrevention: true,
      cache: "bounded",
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: this.app, cors: true });
  }
}

new App().listen();
