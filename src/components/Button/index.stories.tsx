import Button from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type CommonType = StoryObj<typeof Button>;

export const Primary: CommonType = {
  render: ({ variant, children, disabled, height }) => {
    return (
      <Button
        fullWidth
        variant={variant}
        disabled={disabled}
        height={height}
        onClick={() => {}}
      >
        {children}
      </Button>
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
  render: ({ variant, children, disabled, height }) => {
    return (
      <Button
        fullWidth
        variant={variant}
        disabled={disabled}
        height={height}
        onClick={() => {}}
      >
        {children}
      </Button>
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
  render: ({ variant, children, disabled, height }) => {
    return (
      <Button
        fullWidth
        variant={variant}
        disabled={disabled}
        height={height}
        onClick={() => {}}
      >
        {children}
      </Button>
    );
  },
  args: {
    variant: "ghost",
    disabled: false,
    children: "버튼 텍스트",
    height: 48,
  },
};
