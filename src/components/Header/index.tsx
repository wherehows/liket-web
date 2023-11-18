import { StrictPropsWithChildren } from "@/types/common";
import LeftOption from "./LeftOption";
import RightOption from "./RightOption";
import MiddleText from "./MiddleText";

const Header = ({ children }: StrictPropsWithChildren<object>) => {
  return (
    <header className="fixed flex justify-between w-[100%] h-[48px] pl-[24px] pr-[24px] pt-[12px] pb-[12px]">
      {children}
    </header>
  );
};

Header.LeftOption = LeftOption;
Header.RightOption = RightOption;
Header.MiddleText = MiddleText;

export default Header;
