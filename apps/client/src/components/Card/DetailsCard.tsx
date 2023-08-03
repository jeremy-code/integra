import React from "react";
import { Flex, Text, Skeleton, Box, useColorModeValue } from "@chakra-ui/react";

import { Card } from "@/components/Card";
import { Icon } from "@/components/Icon";

type DetailsCardProps = {
  title: string;
  isLoaded?: boolean;
  items: {
    heading: string;
    text: string;
    icon?: React.ComponentProps<typeof Icon>;
  }[];
} & React.ComponentProps<typeof Card>;

const DetailsCard = ({
  title,
  isLoaded = true,
  items,
  ...props
}: DetailsCardProps) => {
  const headingColor = useColorModeValue("gray.500", "gray.300");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.300");

  return (
    <Flex flexDir="column" h="full">
      <Text fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Skeleton isLoaded={isLoaded} flexGrow={1}>
        <Card
          display="flex"
          flexDir="column"
          gap={6}
          w="full"
          h="full"
          {...props}
        >
          {items.map(({ heading, text, icon }, index) => (
            <Box key={`${heading}-${index}`}>
              <Text
                fontWeight="semibold"
                textTransform="uppercase"
                fontSize="xs"
                letterSpacing="0.1em"
                color={headingColor}
              >
                {heading}
              </Text>
              <Flex align="center">
                {icon && (
                  <Icon
                    w="30px"
                    border="1px solid"
                    borderColor={borderColor}
                    mr={1}
                    {...icon}
                  />
                )}
                <Text>{text ?? "N/A"}</Text>
              </Flex>
            </Box>
          ))}
        </Card>
      </Skeleton>
    </Flex>
  );
};

export default DetailsCard;
