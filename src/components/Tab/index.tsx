import {
  TAB,
  TabsContext,
  UnionTABS,
  useTabsContext,
} from "@/hooks/useTabsContext";
import { EmptyFunction, StrictPropsWithChildren } from "@/types/common";
import { classNames } from "@/utils/helpers";
import IconButtonGroup from "../IconButtonGroup";
import { useState } from "react";

const SIZE = {
  large: "large",
  medium: "medium",
  small: "small",
} as const;

type UnionSIZE = keyof typeof SIZE;

const COLOR_TOKENS = [
  "#000",
  "#fff",
  "#e0483f",
  "#ec682c",
  "#f5d949",
  "#4eab87",
  "#3b85ca",
  "#45098c",
] as const;

type UnionCOLOR_TOKENS = (typeof COLOR_TOKENS)[number];

type TabsProps = StrictPropsWithChildren<{ isImageExist: boolean }>;

type TabProps = StrictPropsWithChildren<unknown, string>;

interface SizeTabPanelProps {
  onClickChangeSize: (size: UnionSIZE) => void;
}

interface TextTabPanelProps {
  onClickAddTextTab: (color: UnionCOLOR_TOKENS) => void;
}

interface StickerTabPanelProps {
  onClickAddSticker: EmptyFunction;
}

const Tabs = ({ children, isImageExist }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<UnionTABS>(TAB.SIZE);
  const providerValue = {
    selectedTab,
    isImageExist,
    setSelectedTab,
  };

  return (
    <TabsContext.Provider value={providerValue}>
      <div className="bottom-tab">{children}</div>
    </TabsContext.Provider>
  );
};

const TabList = ({ children }: StrictPropsWithChildren) => {
  return (
    <ul
      role="tablist"
      aria-orientation="horizontal"
      className="w-[100%] h-[100%] flex  pl-[24px] pr-[24px] pb-[72px]"
    >
      {children}
    </ul>
  );
};

const Tab = ({ children }: TabProps) => {
  const { selectedTab, isImageExist, setSelectedTab } = useTabsContext();

  return (
    <li
      role="presentation"
      className={classNames(
        `w-[114px] h-[26px] flex items-center justify-center flex-1 border-solid pt-[8px]`,
        selectedTab === children
          ? "border-t-[2px] border-skyblue-01"
          : "border-t-[1px] border-grey-01"
      )}
    >
      <button
        role="tab"
        disabled={!isImageExist}
        onClick={() => {
          setSelectedTab(children as UnionTABS);
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

const TabPanels = ({ children }: StrictPropsWithChildren) => {
  return <div>{children}</div>;
};

const commonPanelStyle =
  "absolute left-[24px] right-[24px] border-grey-01 border-solid border-t-[1px] min-w-[342px]";

const commonSizeButtonStyle =
  "w-[36px] h-[56px] rounded-[1px] border-solid border-[1px]";

const SizeTabPanel = ({ onClickChangeSize }: SizeTabPanelProps) => {
  const [selectedSize, setSelectedSize] = useState<UnionSIZE>(SIZE.large);
  const { selectedTab, isImageExist } = useTabsContext();

  return (
    <section
      aria-hidden={!isImageExist || selectedTab !== TAB.SIZE}
      className={classNames(
        "top-[-80px] h-[80px]",
        selectedTab === TAB.SIZE && isImageExist ? "block" : "hidden",
        commonPanelStyle
      )}
    >
      <ul
        className={"flex justify-around items-center w-[100%] h-[100%]"}
        onClick={(e) => {
          if ((e.target as HTMLElement).tagName.toLowerCase() === "ul") {
            return;
          }

          const size = (e.target as HTMLElement).closest("li")?.dataset.size;
          size && setSelectedSize(size as UnionSIZE);
          onClickChangeSize(size as UnionSIZE);
        }}
      >
        <li data-size={SIZE.large}>
          <button
            className={classNames(
              commonSizeButtonStyle,
              selectedSize === "large"
                ? "border-skyblue-01 bg-skyblue-01"
                : "border-grey-01 bg-grey-01"
            )}
          />
        </li>
        <li data-size={SIZE.medium}>
          <button
            className={classNames(
              "relative",
              commonSizeButtonStyle,
              selectedSize === "medium" ? "border-skyblue-01" : "border-grey-01"
            )}
          >
            <div
              className={classNames(
                "absolute top-[2px] left-[2px] w-[30px] h-[50px] rounded-[1px]",
                selectedSize === "medium" ? "bg-skyblue-01" : "bg-grey-01"
              )}
            ></div>
          </button>
        </li>
        <li data-size={SIZE.small}>
          <button
            className={classNames(
              "relative",
              commonSizeButtonStyle,
              selectedSize === "small" ? "border-skyblue-01" : "border-grey-01"
            )}
          >
            <div
              className={classNames(
                "absolute top-[2px] left-[2px] w-[30px] h-[40px] rounded-[1px] ",
                selectedSize === "small" ? "bg-skyblue-01" : "bg-grey-01"
              )}
            ></div>
          </button>
        </li>
      </ul>
    </section>
  );
};

const TextTabPanel = ({ onClickAddTextTab }: TextTabPanelProps) => {
  const { selectedTab, isImageExist } = useTabsContext();

  return (
    <section
      aria-hidden={!isImageExist || selectedTab !== TAB.TEXT}
      className={classNames(
        "h-[40px] top-[-40px]",
        selectedTab === TAB.TEXT && isImageExist ? "block" : "hidden",
        commonPanelStyle
      )}
    >
      <ul
        className="flex justify-around w-[100%] h-[100%]"
        onClick={(e) => {
          if ((e.target as HTMLElement).tagName.toLowerCase() === "ul") {
            return;
          }

          const color = (e.target as HTMLElement).closest("li")?.dataset.color;
          onClickAddTextTab(color as UnionCOLOR_TOKENS);
        }}
      >
        {COLOR_TOKENS.map((color) => {
          return (
            <li
              key={color}
              data-color={color}
              className="flex justify-center items-center"
            >
              <button
                style={{
                  backgroundColor: color,
                }}
                className={`w-[24px] h-[24px] rounded-[50%] border-[2px] border-grey-01 border-solid`}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const StickerTabPanel = ({ onClickAddSticker }: StickerTabPanelProps) => {
  const { selectedTab, isImageExist } = useTabsContext();

  return (
    <section
      aria-hidden={!isImageExist || selectedTab !== TAB.STICKER}
      className={classNames(
        "top-[-80px] h-[80px]",
        selectedTab === TAB.STICKER && isImageExist ? "block" : "hidden",
        commonPanelStyle
      )}
    >
      <IconButtonGroup
        iconSize={48}
        onClickIcon={onClickAddSticker}
        icons={[
          "꽃",
          "리본",
          "리본끈1",
          "리본끈2",
          "무지개",
          "반짝이",
          "별1",
          "별2",
          "선글라스",
          "스마일",
          "음표1",
          "음표2",
          "클로버",
          "하트",
        ]}
      />
    </section>
  );
};

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabPanels = TabPanels;
Tabs.SizeTabPanel = SizeTabPanel;
Tabs.TextTabPanel = TextTabPanel;
Tabs.StickerTabPanel = StickerTabPanel;

export default Tabs;
