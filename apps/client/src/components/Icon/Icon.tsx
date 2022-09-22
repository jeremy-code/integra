import React from "react";
import { Icon as ChakraIcon } from "@chakra-ui/react";
// conflicted about this, bundle size becomes signficantly larger if we import all icons
// however, I did not want to dynamically import icons
import * as outlineIcons from "@heroicons/react/24/outline";
import * as solidIcons from "@heroicons/react/24/solid";

import * as socialIcons from "@/components/Icon/SocialMediaIcon";
import * as stateIcons from "@/assets/state_flags";

import type { IconProps as ChakraIconProps } from "@chakra-ui/react";

type IconType =
  | keyof typeof outlineIcons
  | keyof typeof solidIcons
  | keyof typeof socialIcons
  | keyof typeof stateIcons;

type IconVariant = "outline" | "solid" | "custom" | "stateFlag";

type IconProps = {
  icon: IconType;
  variant?: IconVariant;
} & ChakraIconProps;

const Icon = ({ icon, variant = "outline", ...rest }: IconProps) => {
  const icons =
    variant === "solid"
      ? solidIcons
      : variant === "custom"
      ? socialIcons
      : variant === "stateFlag"
      ? stateIcons
      : outlineIcons;

  return <ChakraIcon as={icons[icon]} {...rest} />;
};

export default Icon;
