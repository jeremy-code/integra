import React, { createContext, useContext } from "react";

const officialIdContext = createContext<string>(null);

export const useOfficialId = () => {
  return useContext(officialIdContext);
};

type OfficialIdProviderProps = {
  id: string;
  children: React.ReactNode;
};

export const OfficialIdProvider = ({
  id,
  children,
}: OfficialIdProviderProps) => {
  return (
    <officialIdContext.Provider value={id}>
      {children}
    </officialIdContext.Provider>
  );
};
