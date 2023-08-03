import React from "react";
import { Link as NextLink } from "@chakra-ui/next-js";
import { useRouter } from "next/router";
import { LinkProps } from "@chakra-ui/react";

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
      {...props}
      {...(isActive ? activeProps : {})}
    >
      {children}
    </NextLink>
  );
};

export default NavLink;
