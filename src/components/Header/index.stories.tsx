import type { Meta, StoryObj } from "@storybook/react";

import { Icons } from "@/utils/icons";
import Header from ".";

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
};

export default meta;

type GeneralHeader = StoryObj<
  ({
    text,
    iconGap,
    isTownSelection,
    textSize,
    iconSize,
    leftIcons,
    rightIcons,
  }: {
    text: string;
    iconGap: string;
    textSize: number;
    isTownSelection: boolean;
    iconSize: number;
    leftIcons: Parameters<typeof Header.LeftOption>[0]["icons"];
    rightIcons: Parameters<typeof Header.RightOption>[0]["icons"];
  }) => JSX.Element
>;

export const GeneralHeader: GeneralHeader = {
  render: ({
    text,
    textSize,
    isTownSelection,
    iconGap,
    iconSize,
    leftIcons,
    rightIcons,
  }) => {
    const HeaderLeft = (() => {
      if (isTownSelection) {
        return (
          <Header.LeftOption
            isTownSelection
            iconGap={iconGap}
            iconSize={iconSize}
          />
        );
      }

      if (leftIcons) {
        return (
          <Header.LeftOption
            icons={leftIcons}
            iconSize={iconSize}
            iconGap={iconGap}
            onClickIcon={() => {
              //
            }}
          />
        );
      }

      return null;
    })();

    const HeaderRight = (() => {
      if (rightIcons) {
        return (
          <Header.RightOption
            icons={rightIcons}
            iconGap={iconGap}
            iconSize={iconSize}
            onClickIcon={() => {
              //
            }}
          />
        );
      }

      return null;
    })();

    return (
      <Header>
        {HeaderLeft}
        <Header.MiddleText text={text} textSize={textSize} />
        {HeaderRight}
      </Header>
    );
  },
  argTypes: {
    isTownSelection: {
      control: "boolean",
    },
    leftIcons: {
      options: Icons,
      control: "multi-select",
      description: "2개 이상의 아이콘 선택이 가능합니다",
      if: { arg: "isTownSelection", truthy: false },
    },
    rightIcons: {
      options: Icons,
      control: "multi-select",
      description: "2개 이상의 아이콘 선택이 가능합니다",
    },
  },
  args: {
    text: "육아 · 교육",
    iconGap: "8px",
    isTownSelection: false,
    textSize: 16,
    iconSize: 24,
    leftIcons: ["꽃", "리본", "무지개"],
    rightIcons: ["별1", "무지개", "선글라스"],
  },
};
