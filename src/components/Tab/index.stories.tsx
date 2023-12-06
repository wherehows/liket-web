import type { Meta, StoryObj } from "@storybook/react";
import Tabs from ".";

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
};

export default meta;

type Index = StoryObj<typeof Tabs>;

export const Index: Index = {
  render: ({ isImageExist }) => {
    return (
      <Tabs isImageExist={isImageExist}>
        <Tabs.TabPanels>
          <Tabs.SizeTabPanel onClickChangeSize={() => {}} />
          <Tabs.TextTabPanel onClickAddTextTab={() => {}} />
          <Tabs.StickerTabPanel onClickAddSticker={() => {}} />
        </Tabs.TabPanels>
        <Tabs.TabList>
          <Tabs.Tab id="size">사이즈</Tabs.Tab>
          <Tabs.Tab id="text">텍스트</Tabs.Tab>
          <Tabs.Tab id="sticker">스티커</Tabs.Tab>
        </Tabs.TabList>
      </Tabs>
    );
  },
  argTypes: {
    isImageExist: {
      control: "boolean",
    },
  },
};
