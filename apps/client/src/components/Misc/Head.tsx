import React from "react";
import NextHead from "next/head";

type HeadProps = {
  title?: string;
  image?: string;
  description?: string;
};

const Head = ({ title, image, description }: HeadProps) => {
  return (
    <NextHead>
      <meta
        property="og:title"
        content={title ? `${title} | Integra` : "Integra"}
      />
      <meta
        name="description"
        content={
          description ??
          "Web application to learn about your polticial representatives"
        }
      />
      <meta property="og:url" content="https://integra.pages.dev/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={image ?? "https://integra.pages.dev/favicon-32x32.png"}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title ?? "Integra"} />
      <meta
        name="twitter:description"
        content={
          description ??
          "Web application to learn about your polticial representatives"
        }
      />
      <title>{title ? `${title} | Integra` : "Integra"}</title>
    </NextHead>
  );
};

export default Head;
