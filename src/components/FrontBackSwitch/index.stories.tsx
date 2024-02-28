import FrontBackSwitch from "@/components/FrontBackSwitch";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof FrontBackSwitch> = {
  title: "components/FrontBackSwitch",
  component: FrontBackSwitch,
};

export default meta;

type Index = StoryObj<typeof FrontBackSwitch>;

export const Index: Index = {
  render: function Render() {
    const [isFront, setIsFront] = useState(false);

    return (
      <FrontBackSwitch
        isFront={isFront}
        onClickSwitch={() => setIsFront(!isFront)}
      />
    );
  },
};
