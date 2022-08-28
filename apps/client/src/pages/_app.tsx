import { ApolloProvider } from "@apollo/client";
import { SWRConfig } from "swr";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { apolloClient, fetcher, theme } from "@/utils";

import "@/main.css";
import "reflect-metadata";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <SWRConfig
        value={{
          fetcher: fetcher,
        }}
      >
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SWRConfig>
    </ApolloProvider>
  );
};

export default MyApp;
