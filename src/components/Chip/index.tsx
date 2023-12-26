import { StrictPropsWithChildren } from "@/types/common";
import { classNames } from "@/utils/helpers";

const variantToStyleMap = {
  active: "bg-skyblue-01 text-white",
  inactive: "bg-grey-01 text-grey-02",
  closed: "bg-grey-04 text-white",
  waiting: "bg-grey-01 text-grey-03",
  willActive: "bg-grey-01 text-grey-04",
  willClosed: "bg-rosepink-01 text-white",
};

type ChipProps = StrictPropsWithChildren<
  {
    variant: keyof typeof variantToStyleMap;
  },
  string
>;

const Chip = ({ variant, children }: ChipProps) => {
  return (
    <span
      className={classNames(
        "text-flag rounded-[4px] pl-[4px] pr-[4px] h-[21px] inline-block leading-[21px]",
        variantToStyleMap[variant]
      )}
    >
      {children}
    </span>
  );
};

export default Chip;
