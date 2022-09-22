import { useOfficialData } from "@/hooks";
import { IconCard } from "@/components/Card";
import { parsePhoneNumber } from "libphonenumber-js";

export const Contact = () => {
  const { official, error } = useOfficialData({
    queryName: "getContactInfo",
    query: `{
      id
      phone
      url
      contact_form
    }`,
  });

  if (error) return <>&quot;Contact&quot; failed to load</>;

  const phone = official?.phone
    ? parsePhoneNumber(official?.phone, "US")
    : null;

  return (
    <IconCard
      title="Contact"
      isLoaded={!!official}
      items={[
        {
          icon: {
            icon: "PhoneIcon",
          },
          href: phone?.getURI(),
          text: phone?.formatNational(),
        },
        {
          icon: {
            icon: "LinkIcon",
          },
          href: official?.url,
        },
        {
          icon: {
            icon: "ChatBubbleBottomCenterTextIcon",
          },
          href: official?.contact_form,
        },
      ]}
    />
  );
};
