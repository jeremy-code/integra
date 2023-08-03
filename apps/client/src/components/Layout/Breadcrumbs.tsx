import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { Link } from "@chakra-ui/next-js";

type BreadcrumbsProps = {
  breadcrumbs: {
    title: string;
    href: string;
  }[];
};

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <Box
      py={4}
      borderBottom="1px solid"
      borderColor={useColorModeValue("gray.200", "whiteAlpha.300")}
    >
      <Container>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          {breadcrumbs?.map(({ title, href }, index) => (
            <BreadcrumbItem
              key={`${title} ${href}`}
              isCurrentPage={index === breadcrumbs.length - 1}
            >
              <Link as={BreadcrumbLink} href={href}>
                {title}
              </Link>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Container>
    </Box>
  );
};

export default Breadcrumbs;
