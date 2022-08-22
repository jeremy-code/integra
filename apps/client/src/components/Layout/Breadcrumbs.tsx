import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

import Link from "next/link";

type BreadcrumbsProps = {
  breadcrumbs: {
    title: string;
    href: string;
  }[];
};

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <Box
      py={3}
      bg={useColorModeValue("gray.50", "gray.900")}
      borderBottom="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.800")}
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
              <Link href={href} passHref>
                <BreadcrumbLink>{title}</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Container>
    </Box>
  );
};

export default Breadcrumbs;
