import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

import { isDevelopment } from "../config";

export const startServer = () => {
  const app = express();

  app
    .disable("x-powered-by")
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors())
    .use(
      rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
      })
    )
    .use(
      helmet({
        // necessary for GraphQL Sandbox
        crossOriginEmbedderPolicy: !isDevelopment,
        contentSecurityPolicy: !isDevelopment,
      })
    )
    .enable("trust proxy");

  return app;
};
