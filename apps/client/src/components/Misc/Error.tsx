import React, { useEffect } from "react";
import { useToast, Heading, Text, SimpleGrid, Stack } from "@chakra-ui/react";

import { Layout } from "@/components/Layout";
import { Link, Image } from "@/components/Misc";
import { NotFoundImage } from "@/assets";

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
      <SimpleGrid columns={[1, null, 2]} h="full" alignItems="center">
        <Image
          src={NotFoundImage}
          alt="An error has occured"
          layout="responsive"
        />
        <Stack>
          <Heading mb={4}>Something went wrong.</Heading>
          <Text fontSize="lg">
            An error occured.{" "}
            <Link to="/" color="primary.600">
              Click here to return to the homepage.
            </Link>
          </Text>
        </Stack>
      </SimpleGrid>
    </Layout>
  );
};

export default Error;
