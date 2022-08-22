import { ApolloClient, InMemoryCache } from "@apollo/client";

const APOLLO_CLIENT_URI =
  process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URL ?? "http://localhost:8080/graphql";

const client = new ApolloClient({
  uri: APOLLO_CLIENT_URI,
  cache: new InMemoryCache(),
});

export default client;
