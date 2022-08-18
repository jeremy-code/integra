import React from "react";
import { Container } from "@chakra-ui/react";
import type { ContainerProps } from "@chakra-ui/react";

import { Navbar, Footer } from "@/components/Layout";

type LayoutProps = {
  children: React.ReactNode;
} & ContainerProps;

const Layout = ({ children, ...rest }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Container as="main" my={4} {...rest}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
