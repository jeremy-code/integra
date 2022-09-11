import { buildSchemaSync } from "type-graphql";

import { ErrorInterceptor } from "./utils";

import resolvers from "./resolvers";

export const schema = buildSchemaSync({
  resolvers,
  globalMiddlewares: [ErrorInterceptor],
});
