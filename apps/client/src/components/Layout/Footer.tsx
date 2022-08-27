import React from "react";
import { Center, Text, Link, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center
      as="footer"
      h={16}
      borderTop="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.600")}
    >
      <Text>
        Made with ❤️ by{" "}
        <Link
          isExternal
          href="https://jeremynguyen.dev"
          color={useColorModeValue("primary.600", "primary.300")}
        >
          Jeremy Nguyen
        </Link>
      </Text>
    </Center>
  );
};

export default Footer;
