import { StrictPropsWithChildren } from "@/types/common";
import LeftOption from "./LeftOption";
import RightOption from "./RightOption";
import MiddleText from "./MiddleText";

const Header = ({ children }: StrictPropsWithChildren<object>) => {
  return <header className="header">{children}</header>;
};

Header.LeftOption = LeftOption;
Header.RightOption = RightOption;
Header.MiddleText = MiddleText;

export default Header;
