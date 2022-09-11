import { MiddlewareFn } from "type-graphql";
import { logger } from "./logger";

export const ErrorInterceptor: MiddlewareFn = async (_action, next) => {
  try {
    return await next();
  } catch (err) {
    if (err instanceof Error) {
      logger.error(err.message);
    }
    throw err;
  }
};
