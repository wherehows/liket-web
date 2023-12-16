import { classNames } from "@/utils/helpers";
import { useState } from "react";

const CARD_SIZE = {
  LARGE: "LARGE",
  MEDIUM: "MEDIUM",
  SMALL: "SMALL",
} as const;

type CardSizeType = keyof typeof CARD_SIZE;

interface SizeEditProps {
  onClickChangeSize: (size: CardSizeType) => void;
}

const SizeEdit = ({ onClickChangeSize }: SizeEditProps) => {
  const [selectedSize, setSelectedSize] = useState<CardSizeType>(
    CARD_SIZE.LARGE
  );

  return (
    <div
      className={"flex justify-around items-center w-[100%] h-[80px]"}
      onClick={(e) => {
        if ((e.target as HTMLElement).tagName.toLowerCase() === "ul") {
          return;
        }

        const size = (e.target as HTMLElement).closest("button")?.dataset.size;

        if (size) {
          size && setSelectedSize(size as CardSizeType);
          onClickChangeSize(size as CardSizeType);
        }
      }}
    >
      <button
        data-size={CARD_SIZE.LARGE}
        aria-label="large 사이즈로 바꾸기"
        className={classNames(
          "w-[36px] h-[56px] rounded-[1px] border-solid border-[1px]",
          selectedSize === CARD_SIZE.LARGE
            ? "border-skyblue-01 bg-skyblue-01"
            : "border-grey-01 bg-grey-01"
        )}
      />
      <button
        data-size={CARD_SIZE.MEDIUM}
        aria-label="medium 사이즈로 바꾸기"
        className={classNames(
          "relative",
          "w-[36px] h-[56px] rounded-[1px] border-solid border-[1px]",
          selectedSize === CARD_SIZE.MEDIUM
            ? "border-skyblue-01"
            : "border-grey-01"
        )}
      >
        <div
          className={classNames(
            "absolute top-[2px] left-[2px] w-[30px] h-[50px] rounded-[1px]",
            selectedSize === CARD_SIZE.MEDIUM ? "bg-skyblue-01" : "bg-grey-01"
          )}
        ></div>
      </button>
      <button
        data-size={CARD_SIZE.SMALL}
        aria-label="small 사이즈로 바꾸기"
        className={classNames(
          "relative",
          "w-[36px] h-[56px] rounded-[1px] border-solid border-[1px]",
          selectedSize === CARD_SIZE.SMALL
            ? "border-skyblue-01"
            : "border-grey-01"
        )}
      >
        <div
          className={classNames(
            "absolute top-[2px] left-[2px] w-[30px] h-[40px] rounded-[1px] ",
            selectedSize === CARD_SIZE.SMALL ? "bg-skyblue-01" : "bg-grey-01"
          )}
        ></div>
      </button>
    </div>
  );
};

export default SizeEdit;
