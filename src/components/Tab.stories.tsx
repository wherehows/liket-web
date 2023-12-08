import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "@/components/WriteTab";
import Button from "./Button";
import BottomButtonTab from "./ButtonTab";

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
};

export default meta;

type WriteTab = StoryObj<typeof Tabs>;

export const WriteTab: WriteTab = {
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

export const OneButtonBottomTab = {
  render: () => {
    return (
      <BottomButtonTab>
        <Button fullWidth>저장</Button>
      </BottomButtonTab>
    );
  },
};

export const TwoButtonBottomTab = {
  render: () => {
    return (
      <BottomButtonTab>
        <Button variant="ghost" fullWidth margin="0 8px 0 0">
          이전 페이지
        </Button>
        <Button fullWidth margin="0 0 0 8px">
          메인으로 가기
        </Button>
      </BottomButtonTab>
    );
  },
};
