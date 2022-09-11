import { StatCard } from "@/components/Card";
import { useOfficialData } from "@/hooks";
import { UnorderedList, ListItem, Link } from "@chakra-ui/react";

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

  const socialMedia = official?.social_media;

  if (error) return <>&quot;Social Media&quot; failed to load</>;

  return (
    <StatCard isLoaded={!!official} title="Social Media" w="full">
      {socialMedia ? (
        <UnorderedList>
          <ListItem>
            Facebook:{" "}
            {socialMedia.facebook ? (
              <Link
                href={`https://facebook.com/${socialMedia.facebook}`}
                isExternal
                color="blue.500"
              >
                {socialMedia?.facebook}
              </Link>
            ) : (
              "N/A"
            )}
          </ListItem>
          <ListItem>
            Twitter:{" "}
            {socialMedia.twitter ? (
              <Link
                href={`https://twitter.com/${socialMedia.twitter}`}
                target="_blank"
                color="blue.500"
              >
                {socialMedia.twitter}
              </Link>
            ) : (
              "N/A"
            )}
          </ListItem>
          <ListItem>
            Youtube:{" "}
            {socialMedia.youtube ? (
              <Link
                href={`https://youtube.com/${socialMedia.youtube}`}
                target="_blank"
                color="blue.500"
              >
                {socialMedia.youtube}
              </Link>
            ) : (
              "N/A"
            )}
          </ListItem>
        </UnorderedList>
      ) : (
        "None found"
      )}
    </StatCard>
  );
};
