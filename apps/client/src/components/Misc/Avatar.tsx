import React from "react";
import { Avatar as ChakraAvatar, Circle } from "@chakra-ui/react";
import type { AvatarProps as ChakraAvatarProps } from "@chakra-ui/react";

import { Image } from "@/components/Misc";

interface AvatarProps extends Partial<ChakraAvatarProps> {
  name?: string;
  src?: string;
  alt?: string;
  placeholder?: "blur" | "empty";
}

const Avatar = ({ name, src, alt, size, ...props }: AvatarProps) => {
  if (src === null && name) {
    return (
      <ChakraAvatar
        name={name}
        size="lg"
        height={`${size}px`}
        width={`${size}px`}
        {...props}
      />
    );
  }

  return (
    <Circle {...props}>
      <Image
        borderRadius="full"
        src={src}
        width={size}
        height={size}
        alt={alt}
        objectFit="cover"
      />
    </Circle>
  );
};

export default Avatar;
