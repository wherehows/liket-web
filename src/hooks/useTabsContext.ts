import { Dispatch, createContext, useContext } from "react";

export const TabsContext = createContext<{
  selectedTab: string;
  setSelectedTab: Dispatch<string>;
} | null>(null);

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (context === null) {
    throw new Error("useTabsContext should be used within Tabs");
  }

  return context;
};
