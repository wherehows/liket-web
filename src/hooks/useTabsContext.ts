import { Dispatch, createContext, useContext } from "react";

export const TAB = {
  SIZE: "사이즈",
  TEXT: "텍스트",
  STICKER: "스티커",
} as const;

export type UnionTABS = (typeof TAB)[keyof typeof TAB];

export const TabsContext = createContext<{
  selectedTab: UnionTABS;
  isImageExist: boolean;
  setSelectedTab: Dispatch<UnionTABS>;
} | null>(null);

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (context === null) {
    throw new Error("useTabsContext는 Tabs 컴포넌트 내에서 사용돼야 합니다.");
  }

  return context;
};
