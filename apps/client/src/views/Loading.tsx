import { Layout } from "@/components/Layout";
import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Layout display="grid" placeItems="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="primary.500"
        size="xl"
      />
    </Layout>
  );
};

export default Loading;
