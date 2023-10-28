import { TabsContext, useTabsContext } from "@/hooks/useTabsContext";
import { EmptyFunction, StrictPropsWithChildren } from "@/types/common";
import { classNames } from "@/utils/helpers";
import { useState } from "react";

const Tabs = ({ children }: StrictPropsWithChildren) => {
  const [selectedTab, setSelectedTab] = useState(() => {
    if (Array.isArray(children) && children.length) {
      return children[0].props.children;
    }

    return "";
  });

  const providerValue = { selectedTab, setSelectedTab };

  return (
    <TabsContext.Provider value={providerValue}>
      {children}
    </TabsContext.Provider>
  );
};

type TextTabProps = StrictPropsWithChildren<
  {
    onClickTab: EmptyFunction;
  },
  string
>;

const TabList = ({ children }: StrictPropsWithChildren) => {
  return (
    <ul className="w-[100%] h-[98px] flex pl-[24px] pr-[24px] pb-[72px] fixed bottom-0 shadow-[0px_-8px_16px_0px_rgba(0,0,0,0.04)]">
      {children}
    </ul>
  );
};

const Tab = ({ children, onClickTab }: TextTabProps) => {
  const { selectedTab, setSelectedTab } = useTabsContext();

  return (
    <li
      className={classNames(
        `w-[114px] h-[26px] flex items-center justify-center flex-1 border-solid pt-[8px]`,
        selectedTab === children
          ? "border-t-[2px] border-skyblue-01"
          : "border-t-[1px] border-grey-01"
      )}
    >
      <button
        onClick={() => {
          setSelectedTab(children);
          onClickTab();
        }}
        className={classNames(
          selectedTab === children
            ? "text-button3 text-skyblue-01"
            : "text-button4 text-grey-02"
        )}
      >
        {children}
      </button>
    </li>
  );
};

Tabs.TabList = TabList;
Tabs.Tab = Tab;

export default Tabs;
