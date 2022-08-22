import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { SWRConfig } from "swr";

import { apolloClient, fetcher, theme } from "@/utils";
import "@/main.css";

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
