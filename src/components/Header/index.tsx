import { StrictPropsWithChildren } from "@/types/common";
import LeftOption from "./LeftOption";
import RightOption from "./RightOption";
import MiddleText from "./MiddleText";
import { classNames } from "@/utils/helpers";

type Props = StrictPropsWithChildren<{ opacityApplied?: boolean }>;

const Header = ({ children, opacityApplied = false }: Props) => {
  return (
    <header
      className={classNames(
        "header",
        opacityApplied && "max-w-content mx-auto bg-transparent"
      )}
    >
      {children}
    </header>
  );
};

Header.LeftOption = LeftOption;
Header.RightOption = RightOption;
Header.MiddleText = MiddleText;

export default Header;
