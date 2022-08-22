import React from "react";
import NextLink from "next/link";
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
    <NextLink href={to} passHref>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  );
};

export default Link;
