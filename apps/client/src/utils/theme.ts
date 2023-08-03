import {
  extendTheme,
  withDefaultColorScheme,
  theme as base,
} from "@chakra-ui/react";
import { Outfit } from "next/font/google";

const colors = {
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

const components = {
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

const outfit = Outfit({ weight: "variable", subsets: ["latin"] });

const fonts = {
  heading: `${outfit.style.fontFamily}, ${base.fonts.heading}`,
  body: `${outfit.style.fontFamily}, ${base.fonts.body}`,
};

const colorScheme = withDefaultColorScheme({ colorScheme: "primary" });

const theme = extendTheme({ colors, components, fonts }, colorScheme);

export default theme;
