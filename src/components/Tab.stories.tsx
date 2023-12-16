import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "@/components/WriteTab";
import Button from "./Button";
import BottomButtonTabWrapper from "./BottomButtonTabWrapper";
import LinkableTab from "./LinkableTab";

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

export const LinkableTabIndex = {
  render: () => {
    return <LinkableTab />;
  },
};

export const OneButtonBottomTab = {
  render: () => {
    return (
      <BottomButtonTabWrapper>
        <Button
          fullWidth
          height={48}
          onClick={() => {
            //
          }}
        >
          저장
        </Button>
      </BottomButtonTabWrapper>
    );
  },
};

export const TwoButtonBottomTab = {
  render: () => {
    return (
      <BottomButtonTabWrapper gap="16px">
        <Button
          height={48}
          variant="ghost"
          fullWidth
          onClick={() => {
            //
          }}
        >
          이전 페이지
        </Button>
        <Button
          height={48}
          fullWidth
          onClick={() => {
            //
          }}
        >
          메인으로 가기
        </Button>
      </BottomButtonTabWrapper>
    );
  },
};
