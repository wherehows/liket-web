import { Meta } from "@storybook/react";
import OrderButton from ".";

const meta: Meta = {
  title: "components/OrderButton",
};

export default meta;

export const Index = {
  render: () => {
    return <OrderButton onChangeType={(type) => {}} />;
  },
};
