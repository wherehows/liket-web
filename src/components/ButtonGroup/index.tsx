import { StrictPropsWithChildren } from "@/types/common";

type ButtonGroupProps = StrictPropsWithChildren<{
  gap: number;
}>;

const ButtonGroup = ({ children, gap }: ButtonGroupProps) => {
  return (
    <div
      className="flex w-[100%]"
      style={{
        gap,
      }}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;
