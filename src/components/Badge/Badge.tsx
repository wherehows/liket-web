import { StrictPropsWithChildren } from "@/types/common";
import { CONTENT_STATUSType } from "@/utils/const";
import { classNames } from "@/utils/helpers";
import { CSSProperties } from "react";

const variantToStyleMap = {
  active: "bg-skyblue-01 text-white",
  inactive: "bg-grey-01 text-grey-02",
  closed: "bg-grey-04 text-white",
  waiting: "bg-grey-01 text-grey-03",
  willActive: "bg-grey-01 text-grey-04",
  willClosed: "bg-rosepink-01 text-white",
} as {
  [key in CONTENT_STATUSType]: string;
};

type BadgeProps = StrictPropsWithChildren<
  {
    variant: CONTENT_STATUSType;
    style?: CSSProperties;
  },
  string
>;

const Badge = ({ variant, children, style }: BadgeProps) => {
  return (
    <span
      style={style}
      className={classNames(
        "text-flag rounded-[4px] pl-[4px] pr-[4px] h-[21px] inline-block leading-[21px]",
        variantToStyleMap[variant]
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
