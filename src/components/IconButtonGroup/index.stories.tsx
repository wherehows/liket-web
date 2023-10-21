import IconButtonGroup from "@/components/IconButtonGroup";
import type { Meta, StoryObj } from "@storybook/react";

import { Icons } from "@/utils/icons";

const meta: Meta<typeof IconButtonGroup> = {
  title: "IconButtonGroup",
  component: IconButtonGroup,
};

export default meta;

type Index = StoryObj<typeof IconButtonGroup>;

export const Index: Index = {
  render: ({ icons, iconSize }) => {
    return (
      <IconButtonGroup
        icons={icons}
        iconSize={iconSize}
        onClickIcon={() => {}}
      />
    );
  },
  argTypes: {
    icons: {
      options: Icons,
      control: "multi-select",
      description: "2개 이상의 아이콘 선택이 가능합니다",
    },
    iconSize: {
      type: "number",
    },
  },
  args: {
    icons: ["back", "setting"],
    iconSize: 24,
  },
};
