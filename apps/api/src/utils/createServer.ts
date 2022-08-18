import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";

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
    .enable("trust proxy");

  return app;
};
