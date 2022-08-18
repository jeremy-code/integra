import {
  extendTheme,
  withDefaultColorScheme,
  theme as base,
} from "@chakra-ui/react";
import type { CustomThemeTypings } from "@chakra-ui/react";
import "@fontsource/work-sans/variable.css";

const colors: CustomThemeTypings = {
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
};

const components: CustomThemeTypings = {
  Container: {
    baseStyle: {
      maxW: "container.xl",
    },
  },
  Button: {
    baseStyle: {
      borderRadius: "sm",
    },
  },
};

const fonts: CustomThemeTypings = {
  heading: `'Work SansVariable', ${base.fonts.heading}`,
  body: `'Work SansVariable', ${base.fonts.body}`,
};

const colorScheme = withDefaultColorScheme({ colorScheme: "primary" });

const theme = extendTheme({ colors, components, fonts }, colorScheme);

export default theme;
