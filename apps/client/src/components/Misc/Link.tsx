import React from "react";
import { Link as NextLink } from "@chakra-ui/next-js";
import { LinkProps as ChakraLinkProps } from "@chakra-ui/react";

type LinkProps = {
  children: React.ReactNode;
  to: string;
} & ChakraLinkProps;

const Link = ({ children, to, ...rest }: LinkProps) => {
  return (
    <NextLink href={to} {...rest}>
      {children}
    </NextLink>
  );
};

export default Link;
