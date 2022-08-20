import { ApolloClient, InMemoryCache } from "@apollo/client";

const APOLLO_CLIENT_URI =
  import.meta.env.REACT_APP_APOLLO_CLIENT_URI ||
  "http://localhost:8080/graphql";

const client = new ApolloClient({
  uri: APOLLO_CLIENT_URI,
  cache: new InMemoryCache(),
});

export default client;
