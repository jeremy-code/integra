import { Layout } from "@/components/Layout";
import { Text, useToast } from "@chakra-ui/react";
import { useEffect } from "react";

const Error = ({ statusCode }) => {
  const toast = useToast();
  useEffect(() => {
    toast({
      title: "Error",
      description: "An error has occurred.",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  });

  return (
    <Layout>
      <Text>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </Text>
    </Layout>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
