interface DividerProps {
  height: string;
  width: string;
  orientation?: "horizontal" | "vertical";
}

const Divider = ({
  height,
  width,
  orientation = "horizontal",
}: DividerProps) => {
  return (
    <hr
      style={{
        width,
        height,
      }}
      className="border-none bg-grey-01"
      aria-orientation={orientation}
    />
  );
};

export default Divider;
