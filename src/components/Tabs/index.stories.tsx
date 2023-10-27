import type { Meta, StoryObj } from "@storybook/react";
import Tabs from ".";

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
};

export default meta;

type Index = StoryObj<typeof Tabs>;

export const Index: Index = {
  render: () => {
    return (
      <Tabs>
        <Tabs.Tab onClickTab={() => {}}>사이즈</Tabs.Tab>
        <Tabs.Tab onClickTab={() => {}}>텍스트</Tabs.Tab>
        <Tabs.Tab onClickTab={() => {}}>스티커</Tabs.Tab>
      </Tabs>
    );
  },
};
