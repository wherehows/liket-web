import { StrictPropsWithChildren } from "@/types/common";
import { classNames } from "@/utils/helpers";

type BottomButtonTab = StrictPropsWithChildren<{ shadow?: boolean }>;

const BottomButtonTab = ({ children, shadow = false }: BottomButtonTab) => {
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

export default BottomButtonTab;
