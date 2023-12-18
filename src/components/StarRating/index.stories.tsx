import { StoryObj } from "@storybook/react";
import StarRating from ".";
import { colors } from "@/utils/style";
import { useState } from "react";

const meta = {
  title: "components/StarRating",
};

export default meta;

type StarRatingType = StoryObj<typeof StarRating>;

export const ReadOnly: StarRatingType = {
  render: ({ value, inactiveFillColor }) => {
    return (
      <StarRating
        value={value}
        readOnly={true}
        inactiveFillColor={inactiveFillColor}
      />
    );
  },
  argTypes: {
    value: {
      type: "number",
      max: 5,
      min: 0,
      step: 1,
    },
    inactiveFillColor: {
      control: "inline-radio",
      options: [colors.grey["01"], colors.grey["02"]],
    },
  },
  args: {
    inactiveFillColor: colors.grey["01"],
  },
};

export const Selectable: StarRatingType = {
  render: () => {
    const [rating, setRating] = useState(0);

    return (
      <StarRating
        value={rating}
        onChangeRate={setRating}
        inactiveFillColor={colors.grey["01"]}
      />
    );
  },
  argTypes: {
    inactiveFillColor: {
      control: "inline-radio",
      options: [colors.grey["01"], colors.grey["02"]],
    },
  },
  args: {
    inactiveFillColor: colors.grey["01"],
  },
};
