import { EmptyFunction } from "@/types/common";
import { classNames } from "@/utils/helpers";
import { ReactNode } from "react";

interface Props {
  Icon: ReactNode;
  text: string;
  placeholder: string;
  onClick: EmptyFunction;
}

const Index = ({ Icon, text, placeholder, onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "flex justify-between items-center border-solid border-[1px] border-grey-02 rounded-[20px] h-[40px] px-[16px] w-[171px] text-body3",
        !text && "text-button4 text-grey-02"
      )}
    >
      {text || placeholder}
      {Icon}
    </button>
  );
};

type AsReadOnlyProps = Pick<Props, "Icon" | "text">;

const AsReadOnly = ({ Icon, text }: AsReadOnlyProps) => {
  return (
    <div className="flex justify-between items-center border-solid border-[1px] border-grey-02 rounded-[20px] h-[40px] px-[16px] w-[171px] text-body3">
      {text}
      {Icon}
    </div>
  );
};

Index.AsReadOnly = AsReadOnly;

export default Index;
