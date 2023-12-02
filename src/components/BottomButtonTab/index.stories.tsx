import type { Meta, StoryObj } from "@storybook/react";
import NextTab from ".";
import Button from "../Button";

const meta: Meta<typeof NextTab> = {
  title: "NextTab",
  component: NextTab,
};

export default meta;

type Index = StoryObj<typeof NextTab>;

export const OneButton: Index = {
  render: () => {
    return (
      <NextTab>
        <Button fullWidth>저장</Button>
      </NextTab>
    );
  },
};

export const TwoButton: Index = {
  render: () => {
    return (
      <NextTab>
        <Button variant="ghost" fullWidth margin="0 8px 0 0">
          이전 페이지
        </Button>
        <Button fullWidth margin="0 0 0 8px">
          메인으로 가기
        </Button>
      </NextTab>
    );
  },
};
