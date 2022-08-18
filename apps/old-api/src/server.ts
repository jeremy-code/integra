import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

export const createServer = () => {
  const app = express();
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
    .enable("trust proxy")
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .get("/healthz", (req, res) => {
      return res.json({ ok: true });
    });

  return app;
};
