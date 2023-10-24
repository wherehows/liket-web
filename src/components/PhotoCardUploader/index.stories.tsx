import type { Meta, StoryObj } from "@storybook/react";

import PhotoCardUploader from ".";

const meta: Meta<typeof PhotoCardUploader> = {
  title: "PhotoCardUploader",
  component: PhotoCardUploader,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Index = StoryObj<typeof PhotoCardUploader>;

export const Index: Index = {
  render: () => {
    return <PhotoCardUploader />;
  },
};
