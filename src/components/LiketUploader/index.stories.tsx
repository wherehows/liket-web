import type { Meta, StoryObj } from "@storybook/react";

import LiketUploader from ".";

const meta: Meta<typeof LiketUploader> = {
  title: "components/LiketUploader",
  component: LiketUploader,
};

export default meta;

type Index = StoryObj<typeof LiketUploader>;

export const Index: Index = {
  render: () => {
    return <LiketUploader />;
  },
};
