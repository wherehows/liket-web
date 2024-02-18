import type { Meta, StoryObj } from "@storybook/react";
import SelectButton from "./MediumSelectButton";
import DownArrow from "@/icons/down-arrow-small-24.svg";
import MediumSelectButton from "./MediumSelectButton";
import SmallSelectButton from "./SmallSelectButton";

const meta: Meta<typeof SelectButton> = {
  title: "components/SelectButton",
  component: SelectButton,
};

export default meta;

type Index = StoryObj<typeof SelectButton>;

export const Index: Index = {
  render: () => {
    return (
      <div>
        <MediumSelectButton
          text={""}
          placeholder={"출생년도"}
          Icon={<DownArrow />}
          onClick={() => {}}
        />
        <SmallSelectButton
          text={""}
          placeholder={"지역"}
          Icon={<DownArrow />}
          onClick={() => {}}
        />
      </div>
    );
  },
};
