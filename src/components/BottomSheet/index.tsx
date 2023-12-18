import { StrictPropsWithChildren } from "@/types/common";
import { ReactNode } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

type CustomBottomSheetProps = StrictPropsWithChildren<
  {
    title?: string;
    open: boolean;
  },
  ReactNode
>;

const CustomBottomSheet = ({
  title,
  open,
  children,
}: CustomBottomSheetProps) => {
  return (
    <BottomSheet open={open}>
      {title && <h2 className="w-[100%] text-center text-h2">{title}</h2>}
      {children}
    </BottomSheet>
  );
};

export default CustomBottomSheet;
