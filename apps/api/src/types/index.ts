import { PrismaClient } from "@prisma/client";
export { Official } from "database";

import { mongoDB } from "../services";
import dataSources from "../datasources";

export type Context = {
  dataSources: ReturnType<typeof dataSources>;
  prisma: PrismaClient;
  mongoDB: mongoDB;
};
