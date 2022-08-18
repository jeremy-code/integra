import type { Response } from "express";
import { logger } from "@/utils";

class ErrorHandler {
  public async handleError(
    error: Error,
    responseStream?: Response
  ): Promise<void> {
    await logger.error(error);
  }
}

export const handler = new ErrorHandler();
