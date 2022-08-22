import Helmet from "react-helmet";
import type { HelmetProps } from "react-helmet";

type HeadProps = {
  title?: string;
} & HelmetProps;

const Head = ({ title, ...rest }: HeadProps) => {
  return (
    <Helmet titleTemplate="%s | Integra" defaultTitle="Integra" {...rest}>
      <html lang="en" />
      <meta property="og:title" content={title ?? "Integra"} />
      <meta
        name="description"
        content="Web application to learn about your polticial representatives"
      />
      <meta property="og:url" content="https://integra.pages.dev/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://integra.pages.dev/favicon-32x32.png"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title ?? "Integra"} />
      <meta
        name="twitter:description"
        content="Web application to learn about your polticial representatives"
      />
      {title && <title>{title}</title>}
    </Helmet>
  );
};

export default Head;
