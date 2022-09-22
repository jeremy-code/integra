import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Container,
  Spacer,
} from "@chakra-ui/react";
import type { BoxProps, FlexProps } from "@chakra-ui/react";

import { Link, Image, ToggleDarkMode } from "@/components/Misc";
import { Icon } from "@/components/Icon";
import { NavLink } from "@/components/Layout";
import { Logo } from "@/assets";

type LinkItemProps = {
  name: string;
  href: string;
} & React.ComponentProps<typeof Icon>;

const LinkItems: LinkItemProps[] = [
  { name: "Home", href: "/", icon: "HomeIcon" },
  { name: "Official", href: "/official/[slug]", icon: "UserIcon" },
  { name: "Officials", href: "/officials", icon: "BuildingLibraryIcon" },
  // { name: "Financials", href: "/financials", icon: "BanknotesIcon" },
];

type SidebarProps = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "flex" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box
        ml={{ base: 0, md: 60 }}
        bg={useColorModeValue("gray.50", "gray.900")}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;

type SidebarContentProps = {
  onClose: () => void;
} & BoxProps;

const SidebarContent = ({ onClose, ...rest }: SidebarContentProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      flexDir="column"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent={["space-between", null, "center"]}
      >
        <Flex align="center" gap={2}>
          <Link to="/" display="contents">
            <Image src={Logo} alt="favicon" width={20} height={20} />
          </Link>
          <Link
            to="/"
            fontSize="2xl"
            fontWeight="bold"
            _hover={{ textDecor: "none" }}
            mr={2}
          >
            Integra
          </Link>
        </Flex>
        <CloseButton
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
          borderRadius="none"
          size="lg"
        />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} href={link.href}>
          <Icon icon={link.icon} mr="4" fontSize="16" />
          {link.name}
        </NavItem>
      ))}
      <Spacer />
      <Box m="4">
        <ToggleDarkMode />
      </Box>
    </Box>
  );
};

type NavItemProps = {
  children: React.ReactNode;
  href: string;
};

const NavItem = ({ children, href }: NavItemProps) => {
  return (
    <NavLink
      href={href}
      textDecoration="none"
      display="flex"
      px="4"
      py="3"
      mx="4"
      alignItems="center"
      _hover={{
        bg: "primary.500",
        color: "white",
      }}
      activeProps={{
        bg: "primary.500",
        color: "white",
      }}
    >
      {children}
    </NavLink>
  );
};

type MobileProps = {
  onOpen: () => void;
} & FlexProps;

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Container
      as="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      {...rest}
    >
      <IconButton
        colorScheme="gray"
        bg={useColorModeValue("white", "gray.900")}
        onClick={onOpen}
        aria-label="open menu"
        icon={<Icon icon="Bars3Icon" w="6" h="6" />}
      />

      <Flex align="center" gap={2}>
        <Link to="/" display="contents">
          <Image src={Logo} alt="favicon" width={20} height={20} />
        </Link>
        <Link
          to="/"
          fontSize="2xl"
          fontWeight="bold"
          _hover={{ textDecor: "none" }}
          mr={2}
        >
          Integra
        </Link>
      </Flex>
      <ToggleDarkMode />
    </Container>
  );
};
