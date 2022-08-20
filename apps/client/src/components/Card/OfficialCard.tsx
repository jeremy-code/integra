import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
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
      <Box>
        <Heading size="md">{official.name}</Heading>
        <Text>{official.party}</Text>
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
