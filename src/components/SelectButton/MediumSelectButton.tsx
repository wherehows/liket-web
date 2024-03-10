import { EmptyFunction } from "@/types/common";
import { classNames } from "@/utils/helpers";
import { ReactNode } from "react";

interface Props {
  Icon: ReactNode;
  text: string;
  placeholder: string;
  onClick: EmptyFunction;
}

const MediumSelectButton = ({ Icon, text, placeholder, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "flex justify-between items-center border-solid border-[1px] border-grey-02 rounded-[20px] h-[40px] px-[16px] w-[171px]",
        !text ? "text-button4 text-grey-02" : "text-body3"
      )}
    >
      {text || placeholder}
      {Icon}
    </button>
  );
};

export default MediumSelectButton;
