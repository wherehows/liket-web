import { CSSProperties, MouseEvent } from "react";
import { classNames } from "@/utils/helpers";

interface Props {
  list: string[];
  selectedTab: string;
  wrapperStyle?: CSSProperties;
  onClickTab: (tab: string) => void;
}

const index = ({ list, selectedTab, wrapperStyle, onClickTab }: Props) => {
  return (
    <ul
      style={wrapperStyle}
      className="flex w-[100%] h-[32px] px-[24px] border-b-[1px] border-grey-01"
      onClick={(e: MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLUListElement;

        const textContent = target.textContent;

        if (target.tagName !== "BUTTON" || !textContent) {
          return;
        }

        onClickTab(textContent);
      }}
    >
      {list.map((tab) => {
        return (
          <li
            key={tab}
            className={classNames(
              "grow h-[100%]",
              selectedTab === tab
                ? "text-skyblue-01 border-b-[2px] border-skyblue-01 text-button3"
                : "text-button4 text-grey-03"
            )}
          >
            <button className="w-[100%] h-[100%] center">{tab}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default index;
