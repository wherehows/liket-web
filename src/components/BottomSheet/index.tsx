import { StrictPropsWithChildren } from "@/types/common";
import { ReactNode } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

type CustomBottomSheetProps = StrictPropsWithChildren<
  {
    title?: string;
    open: boolean;
    onClickBackDrop?: () => void;
  },
  ReactNode
>;

const CustomBottomSheet = ({
  title,
  open,
  children,
  onClickBackDrop,
}: CustomBottomSheetProps) => {
  return (
    <>
      {open && onClickBackDrop && (
        <div
          className="bg-black bg-opacity-60 fixed z-[3] top-0 bottom-0 left-0 right-0"
          onClick={onClickBackDrop}
        />
      )}
      <BottomSheet
        open={open}
        blocking={false}
        snapPoints={({ minHeight }) => [minHeight, 400]}
      >
        {title && <h2 className="w-[100%] text-center text-h2">{title}</h2>}
        {children}
      </BottomSheet>
    </>
  );
};

export default CustomBottomSheet;
