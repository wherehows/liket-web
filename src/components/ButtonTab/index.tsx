import { StrictPropsWithChildren } from "@/types/common";
import { classNames } from "@/utils/helpers";

type ButtonTab = StrictPropsWithChildren<{ shadow?: boolean }>;

const ButtonTab = ({ children, shadow = false }: ButtonTab) => {
  return (
    <div
      className={classNames(
        `bottom-tab pt-[8px] pl-[24px] pr-[24px] pb-[42px]`,
        shadow && `shadow-[0px_-8px_16px_0px_rgba(0,0,0,0.04)]`
      )}
    >
      {children}
    </div>
  );
};

export default ButtonTab;
