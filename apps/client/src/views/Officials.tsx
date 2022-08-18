import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Heading,
  SimpleGrid,
  Text,
  Button,
  Flex,
  Box,
  Avatar,
  Divider,
  ScaleFade,
} from "@chakra-ui/react";
import useSWR from "swr";

import { Layout } from "@/components/Layout";
import { Card } from "@/components/Card";
import { Loading, Error } from "@/views";
import type { OfficialType } from "@/types";

type AddressStateLocation = {
  state: {
    location: string;
  };
};

const OfficialCard = ({ official }: { official: OfficialType }) => {
  const navigate = useNavigate();

  return (
    <Card
      as={Flex}
      w="100%"
      flexDir="column"
      gap={4}
      key={official.name}
      maxW="md"
    >
      <Avatar name={official.name} src={official.photoUrl} />
      <Box>
        <Heading size="md">{official.name}</Heading>
        <Text>{official.party}</Text>
        <Text>{official.phones[0]}</Text>
      </Box>
      <Divider />
      <Button
        bg="primary.500"
        size="sm"
        ml="auto"
        onClick={() => {
          navigate(official.name.replace(/\s/g, "_").toLowerCase()),
            {
              state: { official },
            };
        }}
      >
        Learn More
      </Button>
    </Card>
  );
};

const Officials = () => {
  const location = useLocation();
  const { state } = location as AddressStateLocation;
  const { data, error } = useSWR<OfficialType[]>(
    () => `/api/representatives?address=${state.location}`
  );

  if (!data) return <Loading />;
  if (error) return <Error />;

  return (
    <Layout display="grid" placeItems="center">
      <SimpleGrid columns={[1, null, data?.length]} gap={4} w="full">
        {data?.map((official: OfficialType, index) => (
          <ScaleFade in initialScale={0.9} key={official.name}>
            <OfficialCard official={official} />
          </ScaleFade>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default Officials;
