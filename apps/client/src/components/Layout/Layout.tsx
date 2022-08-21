import React from "react";
import { Container } from "@chakra-ui/react";
import type { ContainerProps } from "@chakra-ui/react";

import { Navbar, Breadcrumbs, Footer } from "@/components/Layout";

type LayoutProps = {
  children: React.ReactNode;
  breadcrumbs?: {
    title: string;
    href: string;
  }[];
} & ContainerProps;

const Layout = ({ children, breadcrumbs, ...rest }: LayoutProps) => {
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
