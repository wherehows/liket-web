import { StoryObj } from "@storybook/react";
import Divider from ".";

const meta = {
  title: "components/Divider",
};

export default meta;

type IndexType = StoryObj<typeof Divider>;

export const Index: IndexType = {
  render: ({ width, height }) => {
    return <Divider width={width} height={height} />;
  },
  args: {
    width: "100%",
    height: "4px",
  },
};
