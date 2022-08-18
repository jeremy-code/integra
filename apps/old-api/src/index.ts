import type { Request, Response } from "express";

import { createServer } from "@/server";
import routes from "@/routes";
import { handler, logger } from "@/utils";

const port = process.env.PORT || 3001;
const server = createServer();

server.use(routes);

// Centralized error handler
server.use(async (err: Error, req: Request, res: Response) => {
  await handler.handleError(err, res);
});
process.on("uncaughtException", (error: Error) => {
  handler.handleError(error);
});
process.on("unhandledRejection", (error: Error) => {
  handler.handleError(error);
});

server.listen(port, () => {
  logger.info(`api running on ${port}`);
});
