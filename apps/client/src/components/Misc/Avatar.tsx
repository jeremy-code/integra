import React, { useEffect } from "react";
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
  return src ? (
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
  ) : (
    <ChakraAvatar
      name={name ?? "Joe Biden"}
      size="lg"
      height={`${size}px`}
      width={`${size}px`}
      getInitials={(name) =>
        name
          .split(" ")
          .slice(1)
          .map((n) => n[0])
          .join("")
      }
      {...props}
    />
  );
};

export default Avatar;
