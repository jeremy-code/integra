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
    <ChakraTabs isLazy>
      <TabList
        bg={useColorModeValue("white", "gray.700")}
        borderWidth="0 1px 2px"
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.600")}
      >
        {content.map((tab) => (
          <Tab key={`${tab.title} label`}>{tab.title}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {content.map((tab) => (
          <TabPanel key={`${tab.title} body`} px={0}>
            {tab.body}
          </TabPanel>
        ))}
      </TabPanels>
    </ChakraTabs>
  );
};

export default Tabs;
