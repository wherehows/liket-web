import { EmptyFunction } from "@/types/common";
import { classNames } from "@/utils/helpers";
import { ReactNode } from "react";

interface Props {
  Icon: ReactNode;
  text: string;
  placeholder: string;
  onClick: EmptyFunction;
}

const SmallSelectButton = ({ Icon, text, placeholder, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "flex justify-between items-center border-solid border-[1px] border-grey-02 rounded-[20px] text-button4",
        text && "bg-skyblue-01text-white",
        "h-[28px] pl-[8px] pr-[6px]"
      )}
    >
      {text || placeholder}
      {Icon}
    </button>
  );
};

export default SmallSelectButton;
