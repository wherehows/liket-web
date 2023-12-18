import Button from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
};

export default meta;

type CommonType = StoryObj<typeof Button>;

export const Primary: CommonType = {
  render: ({ variant, children, height, disabled }) => {
    return (
      <div className="w-[200px] flex">
        <Button
          fullWidth
          height={height}
          variant={variant}
          disabled={disabled}
          onClick={() => {}}
        >
          {children}
        </Button>
      </div>
    );
  },
  args: {
    variant: "primary",
    disabled: false,
    children: "버튼 텍스트",
    height: 48,
  },
};

export const Secondary: CommonType = {
  render: ({ variant, children, height, disabled }) => {
    return (
      <div className="w-[200px] flex">
        <Button
          fullWidth
          height={height}
          variant={variant}
          disabled={disabled}
          onClick={() => {}}
        >
          {children}
        </Button>
      </div>
    );
  },
  args: {
    variant: "secondary",
    disabled: false,
    children: "버튼 텍스트",
    height: 48,
  },
};

export const Ghost: CommonType = {
  render: ({ variant, height, children, disabled }) => {
    return (
      <div className="w-[200px] flex">
        <Button
          fullWidth
          height={height}
          variant={variant}
          disabled={disabled}
          onClick={() => {}}
        >
          {children}
        </Button>
      </div>
    );
  },
  args: {
    variant: "ghost",
    disabled: false,
    children: "버튼 텍스트",
    height: 48,
  },
};
