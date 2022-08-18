import dataSources from "../datasources";

export type Context = {
  dataSources: ReturnType<typeof dataSources>;
};
