import React from "react";
import { Spinner } from "@chakra-ui/react";

import { Layout } from "@/components/Layout";

type LoadingProps = {
  breadcrumbs: {
    title: string;
    href: string;
  }[];
};

const Loading = ({ breadcrumbs }: LoadingProps) => {
  return (
    <Layout display="grid" placeItems="center" breadcrumbs={breadcrumbs}>
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
