import {
  Flex,
  Heading,
  Image,
  Box,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

import { ToggleDarkMode, Link } from "@/components/Misc";
import { Icon } from "@/assets";

const Navbar = () => {
  return (
    <Flex
      as="header"
      height={20}
      borderBottom="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.800")}
    >
      <Container
        as="nav"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Filler element to keep branding centered */}
        <Box aria-hidden />
        <Flex align="center" gap={2}>
          <Link to="/">
            <Image src={Icon} alt="favicon" boxSize="20px" />
          </Link>
          <Link to="/" _hover={{ textDecor: "none" }}>
            <Heading size="md">Integra</Heading>
          </Link>
        </Flex>
        <ToggleDarkMode />
      </Container>
    </Flex>
  );
};

export default Navbar;
