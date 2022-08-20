import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  Tag,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { Card } from "@/components/Card";
import type { IntegraOfficial } from "@/types";

const OfficialCard = ({ official }: { official: IntegraOfficial }) => {
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
      {/* <Avatar name={official.name} src={official.photoUrl} /> */}
      <Box gap={4}>
        <Heading size="md">{official.name}</Heading>
        <Text>{official.title}</Text>
        <Text my={2}>
          Age {official.age} • Served {official.seniority}
          {parseInt(official.seniority) !== 1 ? " years" : " year"}
        </Text>
        {official.party === "D" ? (
          <Tag>Democratic Party</Tag>
        ) : official.party === "R" ? (
          <Tag colorScheme="red">Republican Party</Tag>
        ) : (
          <Tag colorScheme="gray">"Independent"</Tag>
        )}
      </Box>
      <Divider />
      <Button
        bg="primary.500"
        size="sm"
        ml="auto"
        onClick={() => navigate(official.id)}
      >
        Learn More
      </Button>
    </Card>
  );
};

export default OfficialCard;
