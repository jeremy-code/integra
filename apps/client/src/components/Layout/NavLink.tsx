import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

type NavLinkProps = {
  href: string;
  exact?: boolean;
  activeProps?: LinkProps;
  children: React.ReactNode;
} & LinkProps;

const NavLink = ({
  href,
  exact = true,
  children,
  activeProps,
  ...props
}: NavLinkProps) => {
  const { pathname, query } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <NextLink
      href={{
        pathname: href,
        query: { ...(exact && query) },
      }}
      passHref
    >
      <ChakraLink {...props} {...(isActive ? activeProps : {})}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};

export default NavLink;
