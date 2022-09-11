import pino from "pino";
import pretty from "pino-pretty";
import type {
  ApolloServerPlugin,
  GraphQLRequestContext,
  GraphQLRequestListener,
} from "apollo-server-plugin-base";

import { Context } from "../types";

class Logger implements ApolloServerPlugin<Context> {
  private logger: pino.Logger;

  constructor() {
    this.logger = pino(
      {
        level: "info",
        timestamp: pino.stdTimeFunctions.isoTime,
      },
      pretty({
        colorize: true,
      })
    );
  }

  async serverWillStart() {
    this.logger.info(`🚀 Apollo Server is starting up`);
  }

  async requestDidStart(
    requestContext: GraphQLRequestContext<Context>
  ): Promise<void | GraphQLRequestListener<Context>> {
    if (requestContext.request.operationName === "IntrospectionQuery") return;
    this.logger.info(
      `🔥  Request started: ${requestContext.request.operationName}`
    );
  }

  public info(message: string, data?: any) {
    this.logger.info(message, data);
  }

  public error(message: string, data?: any) {
    this.logger.error(message, data);
  }
}

export const logger = new Logger();
