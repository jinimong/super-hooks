import { useState } from "react";

export const useTab = (initialTabIndex, allTabs) => {
  const [tabIndex, setTabIndex] = useState(initialTabIndex);
  if (!allTabs || !Array.isArray(allTabs)) {
    throw Error("Not Found Tabs");
  }
  return {
    tab: allTabs[tabIndex],
    setTabIndex,
  };
};
