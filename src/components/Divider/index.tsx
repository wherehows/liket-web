import { colors } from "@/utils/style";

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
  if (orientation === "vertical") {
    return (
      <div
        style={{
          borderLeft: `${width} solid ${colors.grey["01"]}`,
          height,
        }}
      />
    );
  }

  return (
    <hr
      style={{
        width,
        borderTop: `${height} solid ${colors.grey["01"]}`,
      }}
    />
  );
};

export default Divider;
