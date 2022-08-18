import React, { useReducer } from "react";
import {
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

type TabProps = {
  content: {
    title: string;
    body: React.ReactNode;
  }[];
};

const Tabs = ({ content }: TabProps) => {
  return (
    <ChakraTabs colorScheme="primary" variant="soft-rounded" isLazy>
      <TabList>
        {content.map((tab) => (
          <Tab key={tab.title}>{tab.title}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {content.map((tab) => (
          <TabPanel key={tab.title + "body"} px={0}>
            {tab.body}
          </TabPanel>
        ))}
      </TabPanels>
    </ChakraTabs>
  );
};

export default Tabs;
