import React from "react";
import { Box, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import type { ContainerProps } from "@chakra-ui/react";

import { Navbar, Sidebar, Breadcrumbs, Footer } from "@/components/Layout";

type LayoutProps = {
  children: React.ReactNode;
  sidebar?: boolean;
  breadcrumbs?: {
    title: string;
    href: string;
  }[];
} & ContainerProps;

const Layout = ({
  children,
  sidebar = false,
  breadcrumbs,
  ...rest
}: LayoutProps) => {
  const bg = useColorModeValue("gray.50", "gray.900");

  if (sidebar) {
    return (
      <Sidebar>
        {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
        <Container as="main" my={4} bg={bg} {...rest}>
          {children}
        </Container>
      </Sidebar>
    );
  }

  return (
    <>
      <Navbar />
      {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      <Container as="main" my={4} {...rest}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
