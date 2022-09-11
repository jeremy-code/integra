import { Link } from "@chakra-ui/react";

import { useOfficialData } from "@/hooks";
import { StatCard } from "@/components/Card";

export const ContactInfo = () => {
  const { official, error } = useOfficialData({
    queryName: "getContactInfo",
    query: `{
      id
      contact_form
    }`,
  });

  if (error) return <>&quot;Contact&quot; failed to load</>;

  return (
    <StatCard title="Contact" isLoaded={!!official} w="full">
      {official?.contact_form ? (
        <Link href={official?.contact_form} isExternal color="blue.500">
          Contact Form Link URL
        </Link>
      ) : (
        "No contact form available"
      )}
    </StatCard>
  );
};
