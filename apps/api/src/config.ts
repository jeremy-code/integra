// ENV VARIABLES
export const {
  PORT = 8080,
  DATABASE_URL = "mongodb://localhost:27017",
  GOOGLE_CIVIC_API_KEY = "",
  GOOGLE_KNOWLEDGE_GRAPH_API_KEY = "",
  OPEN_SECRETS_API_KEY = "",
  PROPUBLICA_API_KEY = "",
  NODE_ENV = "development",
} = process.env;

export const isDevelopment = NODE_ENV === "development";
