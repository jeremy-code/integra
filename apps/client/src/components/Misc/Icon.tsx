import { Icon as ChakraIcon } from "@chakra-ui/react";
// conflicted about this, bundle size becomes signficantly larger if we import all icons
// however, I did not want to dynamically import icons
import * as outlineIcons from "@heroicons/react/outline";
import * as solidIcons from "@heroicons/react/solid";
import type { IconProps as ChakraIconProps } from "@chakra-ui/react";

type IconType = keyof typeof outlineIcons | keyof typeof solidIcons;
type IconVariant = "outline" | "solid";

type IconProps = {
  icon: IconType;
  variant?: IconVariant;
} & ChakraIconProps;

const Icon = ({ icon, variant = "outline", ...rest }: IconProps) => {
  const icons = variant === "outline" ? outlineIcons : solidIcons;

  return <ChakraIcon as={icons[icon]} {...rest} />;
};

export default Icon;
