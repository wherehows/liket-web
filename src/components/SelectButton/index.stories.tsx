import type { Meta, StoryObj } from "@storybook/react";
import SelectButton from ".";
import DownArrow from "@/icons/down-arrow-24.svg";

const meta: Meta<typeof SelectButton> = {
  title: "components/SelectButton",
  component: SelectButton,
};

export default meta;

type Index = StoryObj<typeof SelectButton>;

export const Index: Index = {
  render: () => {
    return (
      <SelectButton
        text={""}
        placeholder={"출생년도"}
        Icon={<DownArrow />}
        onClick={() => {}}
      />
    );
  },
};
