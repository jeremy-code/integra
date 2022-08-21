import React from "react";
import {
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react";

type TabProps = {
  content: {
    title: string;
    body: React.ReactNode;
  }[];
};

const Tabs = ({ content }: TabProps) => {
  return (
    <ChakraTabs colorScheme="primary" variant="enclosed-colored" isLazy>
      <TabList>
        {content.map((tab) => (
          <Tab key={`${tab.title} label`}>{tab.title}</Tab>
        ))}
      </TabList>
      <TabPanels
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "whiteAlpha.300")}
      >
        {content.map((tab) => (
          <TabPanel key={`${tab.title} body`}>{tab.body}</TabPanel>
        ))}
      </TabPanels>
    </ChakraTabs>
  );
};

export default Tabs;
