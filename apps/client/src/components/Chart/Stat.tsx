import React from "react";
import {
  Stat as ChakraStat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Skeleton,
  useColorModeValue,
} from "@chakra-ui/react";

import type { StatProps as ChakraStatProps } from "@chakra-ui/react";

type StatProps = {
  label: string;
  data: string;
  isLoaded: boolean;
  helpText?: string;
  type?: "increase" | "decrease";
} & ChakraStatProps;

const Stat = ({
  label,
  data,
  isLoaded,
  helpText,
  type,
  ...rest
}: StatProps) => {
  return (
    <Skeleton isLoaded={isLoaded}>
      <ChakraStat
        p={4}
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "whiteAlpha.300")}
        h="full"
        {...rest}
      >
        <StatLabel>{label}</StatLabel>
        <StatNumber>{data}</StatNumber>
        {helpText && (
          <StatHelpText>
            <StatArrow type={type} />
            {helpText}
          </StatHelpText>
        )}
      </ChakraStat>
    </Skeleton>
  );
};

export default Stat;
