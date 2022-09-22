import React from "react";
import { Icon } from "@chakra-ui/react";

import * as stateIcons from "@/assets/state_flags";

type StateIconProps = {
  state: keyof typeof stateIcons;
};

const StateIcon = ({ state }: StateIconProps) => {
  const icon = stateIcons[state];

  return <Icon as={icon} w="30" h="30" />;
};

export default StateIcon;
