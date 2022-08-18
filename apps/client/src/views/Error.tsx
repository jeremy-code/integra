import React, { useEffect } from "react";
import { useToast, Heading, Text } from "@chakra-ui/react";

import { Layout } from "@/components/Layout";
import { Link } from "@/components/Misc";

const Error = () => {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: "An error occurred.",
      description: "We're sorry! Something went wrong.",
      status: "error",
    });
  }, [toast]);

  return (
    <Layout>
      <Heading>Something went wrong.</Heading>
      <Text>
        An error occured.{" "}
        <Link to="/" color="primary.600">
          Click here to return to the homepage.
        </Link>
      </Text>
    </Layout>
  );
};

export default Error;
