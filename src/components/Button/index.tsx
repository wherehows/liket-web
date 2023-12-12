import { StrictPropsWithChildren } from "@/types/common";
import { classNames } from "@/utils/helpers";

type ButtonProps = StrictPropsWithChildren<
  {
    disabled?: boolean;
    variant?: keyof typeof variantToStyleMap;
    fullWidth?: boolean;
    onClick: () => void;
    height: 48 | 40;
  },
  string
>;

const variantToStyleMap = {
  primary:
    "bg-skyblue-01 text-white hover:bg-skyblue-02 active:bg-skyblue-03 focus:outline-skyblue-02 focus:outline-offset-[1px] focus:outline-[2px]",
  secondary:
    "bg-grey-01 text-black hover:bg-grey-02 active:bg-skyblue-01 active:text-white focus:outline-skyblue-02 focus:outline-offset-[1px] focus:outline-[2px]",
  ghost:
    "border-solid border-grey-02 border-[1px] hover:border-grey-02 active:border-skyblue-01 active:text-skyblue-01 active:border-[2px] focus:outline-[2px] focus:outline-offset-[1px] focus:outline-skyblue-02",
};

const variantWithDisabledStyleMap = {
  primary: "bg-grey-01 text-grey-02",
  secondary: "bg-grey-01 text-grey-02",
  ghost: "text-grey-02 border-solid border-grey-01 border-[2px]",
};

const Button = ({
  disabled = false,
  variant = "primary",
  fullWidth = false,
  children,
  height,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      style={{
        height,
      }}
      className={classNames(
        "center text-button4 rounded-[28px]",
        disabled
          ? `${variantWithDisabledStyleMap[variant]}`
          : `${variantToStyleMap[variant]}`,
        fullWidth && "flex-1"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
