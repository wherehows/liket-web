import { StoryObj } from "@storybook/react";
import KaKaoMap from ".";

const meta = {
  title: "components/KaKaoMap",
};

export default meta;

type IndexType = StoryObj<typeof KaKaoMap>;

export const Index: IndexType = {
  render: () => {
    return (
      <>
        <div>개발자만 확인할 수 있습니다.</div>
        <KaKaoMap />
      </>
    );
  },
};
