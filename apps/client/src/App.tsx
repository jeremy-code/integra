import React from "react";
import { SWRConfig } from "swr";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import { Main, Officials, Official, NotFound } from "@/views";
import { fetcher, theme, apolloClient } from "@/utils";
import "@/main.css";

// All the providers and routes
const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <SWRConfig
        value={{
          fetcher: fetcher,
        }}
      >
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/officials" element={<Officials />} />
              <Route path="/officials/:slug" element={<Official />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </SWRConfig>
    </ApolloProvider>
  );
};

export default App;
