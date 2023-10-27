import { classNames } from "@/utils/helpers";
import { useState } from "react";

const FrontBackSwitch = () => {
  const [isFrontSide, setIsFrontSide] = useState(true);

  return (
    <div className="flex relative w-fit rounded-[16px] bg-grey-01">
      <div
        className={classNames(
          "absolute top-0 w-[57px] h-[32px] bg-skyblue-01 rounded-[16px] duration-500",
          isFrontSide ? "left-0" : "left-[56px]"
        )}
      />
      <button
        className={classNames(
          "relative pointer bg-transparent pl-[16px] pr-[16px] h-[32px] flex justify-center items-center",
          isFrontSide ? "text-button3 text-white" : "text-button4 text-grey-04"
        )}
        onClick={() => {
          !isFrontSide && setIsFrontSide(true);
        }}
      >
        앞면
      </button>
      <button
        className={classNames(
          "relative pointer bg-transparent pl-[16px] pr-[16px] h-[32px] flex justify-center items-center",
          isFrontSide ? "text-button4 text-grey-04" : "text-button3 text-white"
        )}
        onClick={() => {
          isFrontSide && setIsFrontSide(false);
        }}
      >
        뒷면
      </button>
    </div>
  );
};

export default FrontBackSwitch;
