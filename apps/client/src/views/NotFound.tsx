import React from "react";
import { Heading, Text } from "@chakra-ui/react";

import { Layout } from "@/components/Layout";
import { Link } from "@/components/Misc";

const NotFound = () => {
  return (
    <Layout>
      <Heading as="span" fontSize="6xl" color="red.600">
        404
      </Heading>
      <Text mb={4} fontSize="2xl">
        Resource Not Found
      </Text>
      <Text>
        Route was not found.{" "}
        <Link to="/" color="primary.600">
          Click here to return to the homepage.
        </Link>
      </Text>
    </Layout>
  );
};

export default NotFound;
