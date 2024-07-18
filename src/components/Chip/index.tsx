import { StrictPropsWithChildren } from "@/types/common";
import { classNames } from "@/utils/helpers";

type ChipProps = StrictPropsWithChildren<
  {
    isSelected: boolean;
    onClick: () => void;
  },
  string
>;

const Chip = ({ children, isSelected, onClick }: ChipProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "text-button4 rounded-[12px] border-solid border-[1px] px-[8px] h-[24px] center",
        isSelected && "text-white bg-skyblue-01 border-skyblue-01"
      )}
    >
      {children}
    </button>
  );
};

export default Chip;
