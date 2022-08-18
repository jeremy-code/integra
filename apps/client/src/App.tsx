import React from "react";
import { SWRConfig } from "swr";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main, Officials, Official, NotFound } from "@/views";
import { fetcher, theme } from "@/utils";
import "@/main.css";

// All the providers and routes
const App = () => {
  return (
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
            <Route path="/officials/:official_name" element={<Official />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </SWRConfig>
  );
};

export default App;
