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
  // Basically, if there's an src, use the Next.js optimized image component, otherwise use
  // the Avatar component to get a placeholder with the initials
  return src ? (
    <Circle {...props}>
      <Image
        borderRadius="full"
        src={src}
        width={size}
        height={size}
        alt={alt}
        placeholder="blur"
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
