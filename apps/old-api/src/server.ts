import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

import type { Express } from "express";

export const startServer = (app: Express) => {
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors())
    .use(helmet())
    .use(
      rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
      })
    )
    .enable("trust proxy");

  return app;
};
