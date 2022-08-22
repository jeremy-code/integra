import React from "react";
import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { Layout } from "@/components/Layout";
import { Link, Image } from "@/components/Misc";
import { NotFoundImage } from "@/assets";

const NotFound = () => {
  return (
    <Layout>
      <SimpleGrid columns={[1, null, 2]} h="full" alignItems="center">
        <Image src={NotFoundImage.src} alt="Route was not found" />
        <Stack>
          <Heading as="span" fontSize="6xl" color="primary.600">
            404
          </Heading>
          <Text fontSize="xx-large" mb={4}>
            Resource not found.
          </Text>
          <Text fontSize="lg">
            Route was not found.{" "}
            <Link to="/" color="primary.600">
              Click here to return to the homepage.
            </Link>
          </Text>
        </Stack>
      </SimpleGrid>
    </Layout>
  );
};

export default NotFound;
