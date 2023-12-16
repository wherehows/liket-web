import { classNames } from "@/utils/helpers";
import { MouseEvent, useState } from "react";
import SizeEdit from "./SizeEdit";
import TextEdit, { ColorTokensType } from "./TextEdit";
import StickerEdit from "./StickerEdit";

interface WriteTabProps {
  enabled: boolean;
  onClickChangeSize: (size: string) => void;
  onClickSticker: (sticker: MouseEvent<HTMLUListElement>) => void;
  onClickColor: (color: ColorTokensType) => void;
}

const WriteTab = ({
  enabled = true,
  onClickChangeSize,
  onClickSticker,
  onClickColor,
}: WriteTabProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = [
    {
      label: "사이즈",
      content: <SizeEdit onClickChangeSize={onClickChangeSize} />,
    },
    {
      label: "텍스트",
      content: <TextEdit onClickColor={onClickColor} />,
    },
    {
      label: "스티커",
      content: <StickerEdit onClickSticker={onClickSticker} />,
    },
  ];

  return (
    <div className="bottom-tab">
      <div>
        {items.map(({ label, content }, index) => {
          const isSelected = index === selectedIndex;

          return (
            <section
              key={index}
              id={`${label}-panel`}
              aria-hidden={!enabled || !selectedIndex}
              role="tabpanel"
              className={classNames(
                "translate-y-[-100%] absolute left-[24px] right-[24px] border-grey-01 border-solid border-t-[1px] min-w-[342px]",
                isSelected && enabled ? "block" : "hidden"
              )}
            >
              {content}
            </section>
          );
        })}
      </div>
      <div
        role="tablist"
        aria-label="적용 가능 편집 리스트"
        className="w-[100%] h-[100%] flex pl-[24px] pr-[24px] pb-[34px]"
      >
        {items.map(({ label }, index) => {
          const isSelected = index === selectedIndex;

          return (
            <button
              key={index}
              id={`${label}-tab`}
              role="tab"
              disabled={!enabled}
              aria-controls={`${label}-panel`}
              aria-selected={isSelected}
              className={classNames(
                "flex-1 border-solid",
                isSelected && enabled
                  ? "text-button3 text-skyblue-01 border-t-[2px] border-skyblue-01"
                  : "text-button4 text-grey-02 border-t-[1px] border-grey-01"
              )}
              onClick={() => setSelectedIndex(index)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default WriteTab;
