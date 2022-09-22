import { createIcon } from "@chakra-ui/icons";

import type { IconProps } from "@chakra-ui/icons";

// Instead of solid fill, use outline for icons
const defaultProps: IconProps = {
  stroke: "currentColor",
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
};

export const FacebookIcon = createIcon({
  displayName: "FacebookIcon",
  viewBox: "0 0 24 24",
  defaultProps,
  path: (
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  ),
});

export const TwitterIcon = createIcon({
  displayName: "TwitterIcon",
  viewBox: "0 0 24 24",
  defaultProps,
  path: (
    <path d="M23 3a10.9 10.9 0 0 1-3.1 1.5 4.5 4.5 0 0 0-7.9 3v1A10.7 10.7 0 0 1 3 4s-4 9 5 13a11.6 11.6 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0 0-.8A7.7 7.7 0 0 0 23 3z" />
  ),
});

export const YoutubeIcon = createIcon({
  displayName: "YoutubeIcon",
  viewBox: "0 0 24 24",
  defaultProps,
  path: [
    <path d="M22.5 6.4a2.8 2.8 0 0 0-1.9-2C18.9 4 12 4 12 4s-6.9 0-8.6.5a2.8 2.8 0 0 0-2 2 29 29 0 0 0-.4 5.3 29 29 0 0 0 .5 5.3A2.8 2.8 0 0 0 3.4 19c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .4-5.3 29 29 0 0 0-.5-5.3z" />,
    <path d="m9.8 15 5.7-3.2-5.7-3.3V15z" />,
  ],
});
