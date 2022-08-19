import dataSources from "../datasources";
import { PrismaClient } from "@prisma/client";

export type Context = {
  dataSources: ReturnType<typeof dataSources>;
  prisma: PrismaClient;
};
