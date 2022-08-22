import pino from "pino";
import { createPinoBrowserSend, createWriteStream } from "pino-logflare";

const pinoConfig = {
  apiKey: process.env.NEXT_PUBLIC_LOGFLARE_API_KEY ?? "",
  sourceToken:
    process.env.NEXT_PUBLIC_LOGFLARE_SOURCE_ID ??
    "b6af012a-ac27-4dfa-b7bb-543e091e2e5a",
};

const stream = createWriteStream(pinoConfig);
const send = createPinoBrowserSend(pinoConfig);

const logger = pino(
  {
    browser: {
      transmit: {
        level: "info",
        send,
      },
    },
    level: "debug",
    base: {
      env: process.env.NODE_ENV,
    },
  },
  stream
);

export default logger;
