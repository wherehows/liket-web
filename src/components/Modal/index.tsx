import { classNames } from "@/utils/helpers";
import FocusKeeper from "../\bFocusKeeper";
import { StrictPropsWithChildren } from "@/types/common";
import { ReactNode } from "react";

type ModalProp = StrictPropsWithChildren<{
  title: string;
  footer: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  ariaLabel: string;
}>;

const Modal = ({
  title,
  children,
  footer,
  ariaLabel,
  isOpen,
  onClose,
}: ModalProp) => {
  return (
    <div
      className={classNames(
        `center fixed top-0 bottom-0 left-0 right-0 z-10 bg-[rgba(0,0,0,0.6)]`,
        isOpen ? "opacity-1" : "opacity-0"
      )}
      onClick={onClose}
    >
      <div className="flex flex-col p-[16px] w-[280px] border-solid rounded-[24px] bg-white">
        <FocusKeeper
          ariaLabel={ariaLabel}
          onEscape={() => onClose && onClose()}
        >
          <div className="flex justify-center mb-[8px]">
            <h2 className="text-h2">{title}</h2>
          </div>
          <div>{children}</div>
          {!!footer && (
            <div className="flex justify-center mt-[8px]">{footer}</div>
          )}
        </FocusKeeper>
      </div>
    </div>
  );
};

export default Modal;
