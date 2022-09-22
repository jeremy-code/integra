import { useOfficialData } from "@/hooks";
import { DetailsCard } from "@/components/Card";

export const About = () => {
  const { official, error } = useOfficialData({
    queryName: "getAbout",
    query: `{
      id
      state
      district
      party
      office
      seniority
      age
      next_election 
    }`,
  });

  if (error) return <>&quot;About&quot; failed to load</>;

  return (
    <DetailsCard
      title="About"
      isLoaded={!!official}
      items={[
        {
          heading: official?.district ? "District" : "State",
          text: official?.district
            ? `${official?.state}-${official?.district}`
            : official?.state,
          icon: {
            icon: official?.state ?? ("CA" as any),
            variant: "stateFlag",
          },
        },
        {
          heading: "Party Affiliation",
          text: official?.party,
        },
        {
          heading: "Office",
          text: official?.office,
        },
        {
          heading: "Years served",
          text: official?.seniority,
        },
        {
          heading: "Age",
          text: official?.age.toString(),
        },
        {
          heading: "Next Election",
          text: official?.next_election,
        },
      ]}
    />
  );
};
