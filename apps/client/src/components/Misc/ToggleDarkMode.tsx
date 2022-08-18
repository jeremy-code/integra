import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";

import { Icon } from "@/components/Misc";

const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode !== "light";

  return (
    <IconButton
      icon={isDark ? <Icon icon="MoonIcon" /> : <Icon icon="SunIcon" />}
      onClick={() => toggleColorMode()}
      aria-label="Toggle Dark Mode"
      colorScheme="gray"
    />
  );
};

export default ToggleDarkMode;
