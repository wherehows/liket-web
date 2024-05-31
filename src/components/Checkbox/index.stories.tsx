import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from ".";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "components/Checkbox",
  component: Checkbox,
};

export default meta;

type Index = StoryObj<typeof Checkbox>;

export const Index: Index = {
  render: function Render() {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <Checkbox
        label="text"
        size="12px"
        isChecked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
    );
  },
};
