import { Stat } from "@/components/Chart";
import { useOfficialData } from "@/hooks";

export const CookPVIStat = () => {
  const { official, error } = useOfficialData({
    queryName: "getCookPVI",
    query: `{
      id
      cook_pvi
    }`,
  });

  if (error) return <>&quot;Cook PVI&quot; failed to load</>;

  return (
    <Stat
      data={official?.cook_pvi ?? "Not Found"}
      label="Cook PVI"
      isLoaded={!!official}
      w="full"
    />
  );
};
