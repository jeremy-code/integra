import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

type LinkProps = {
  children: React.ReactNode;
  to: string;
} & ChakraLinkProps;

const Link = ({ children, to, ...rest }: LinkProps) => {
  return (
    <ChakraLink as={RouterLink} to={to} {...rest}>
      {children}
    </ChakraLink>
  );
};

export default Link;
