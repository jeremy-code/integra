import { ApolloClient, InMemoryCache } from "@apollo/client";

const APOLLO_CLIENT_URI =
  import.meta.env.VITE_APOLLO_CLIENT_URL || "http://localhost:8080/graphql";

const client = new ApolloClient({
  uri: APOLLO_CLIENT_URI,
  cache: new InMemoryCache(),
});

export default client;
