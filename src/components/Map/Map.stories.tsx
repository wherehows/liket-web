import { StoryObj } from "@storybook/react";
import Map from ".";

const meta = {
  title: "components/Map",
};

export default meta;

type IndexType = StoryObj<typeof Map>;

export const Index: IndexType = {
  render: (props) => {
    return (
      <>
        <div>개발자만 확인할 수 있습니다.</div>
        <Map {...props} />
      </>
    );
  },
  args: {
    width: "400px",
    height: "400px",
  },
};
