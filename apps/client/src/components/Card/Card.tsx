import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

type CardProps = {
  children?: React.ReactNode;
} & BoxProps;

const Card = ({ children, ...rest }: CardProps) => {
  return (
    <Box
      w="fit-content"
      bg={useColorModeValue("white", "gray.700")}
      border="1px solid"
      borderColor={useColorModeValue("gray.200", "whiteAlpha.300")}
      borderRadius="sm"
      p={4}
      maxW="100%"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Card;
