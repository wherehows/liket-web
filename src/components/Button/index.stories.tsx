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
  render: ({ variant, children, disabled }) => {
    return (
      <Button variant={variant} disabled={disabled}>
        {children}
      </Button>
    );
  },
  args: {
    variant: "primary",
    disabled: false,
    children: "버튼 텍스트",
  },
};

export const Secondary: CommonType = {
  render: ({ variant, children, disabled }) => {
    return (
      <Button variant={variant} disabled={disabled}>
        {children}
      </Button>
    );
  },
  args: {
    variant: "secondary",
    disabled: false,
    children: "버튼 텍스트",
  },
};

export const Ghost: CommonType = {
  render: ({ variant, children, disabled }) => {
    return (
      <Button variant={variant} disabled={disabled}>
        {children}
      </Button>
    );
  },
  args: {
    variant: "ghost",
    disabled: false,
    children: "버튼 텍스트",
  },
};
