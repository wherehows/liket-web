import ButtonGroup from ".";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "../Button";

const meta: Meta<typeof ButtonGroup> = {
  title: "components/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Index = StoryObj<typeof ButtonGroup>;

export const Index: Index = {
  render: ({ gap }) => {
    return (
      <div className="w-[400px]">
        <ButtonGroup gap={gap}>
          <Button fullWidth variant="ghost" height={40} onClick={() => {}}>
            취소
          </Button>
          <Button fullWidth height={40} onClick={() => {}}>
            확인
          </Button>
        </ButtonGroup>
      </div>
    );
  },
  args: {
    gap: 8,
  },
};
