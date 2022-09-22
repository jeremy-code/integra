import { useOfficialData } from "@/hooks";
import { IconCard } from "@/components/Card";

export const SocialMedia = () => {
  const { official, error } = useOfficialData({
    queryName: "getSocialMedia",
    query: `{
      id
      social_media {
        facebook
        twitter
        youtube
      }
    }`,
  });

  if (error) return <>&quot;Social Media&quot; failed to load</>;

  return (
    <IconCard
      title="Social Media"
      isLoaded={!!official}
      items={[
        {
          icon: {
            icon: "FacebookIcon",
            variant: "custom",
          },
          href: official?.social_media?.facebook
            ? `https://facebook.com/${official?.social_media?.facebook}`
            : undefined,
          text: official?.social_media?.facebook,
        },

        {
          icon: {
            icon: "TwitterIcon",
            variant: "custom",
          },
          href: official?.social_media?.twitter
            ? `https://twitter.com/${official?.social_media?.twitter}`
            : undefined,
          text: `@${official?.social_media?.twitter}`,
        },
        {
          icon: {
            icon: "YoutubeIcon",
            variant: "custom",
          },
          href: official?.social_media?.youtube
            ? `https://youtube.com/${official?.social_media?.youtube}`
            : undefined,
          text: official?.social_media?.youtube,
        },
      ]}
    />
  );
};
