import { classNames } from "@/utils/helpers";
import { useState } from "react";

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

export type ColorTokensType = (typeof COLOR_TOKENS)[number];

interface TextProps {
  onClickColor: (color: ColorTokensType) => void;
}

const TextEdit = ({ onClickColor }: TextProps) => {
  const [clickedColor, setClickedColor] = useState<ColorTokensType>("#000");

  return (
    <ul
      className="flex justify-around w-[100%] h-[40px]"
      onClick={(e) => {
        if ((e.target as HTMLElement).tagName.toLowerCase() === "ul") {
          return;
        }

        const color = (e.target as HTMLElement).closest("li")?.dataset.color;

        if (color) {
          setClickedColor(color as ColorTokensType);
          onClickColor(color as ColorTokensType);
        }
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
              className={classNames(
                `w-[24px] h-[24px] rounded-[50%] border-[2px] border-solid`,
                clickedColor === color ? "border-skyblue-01" : "border-grey-01s"
              )}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TextEdit;
