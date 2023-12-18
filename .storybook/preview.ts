import React from "react";
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { appleGothic } from "../src/app/layout";

const preview: Preview = {
  decorators: [
    (Story) => {
      return React.createElement(
        "div",
        { className: `${appleGothic.className} h-[100%]` },
        React.createElement(Story)
      );
    },
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    layout: "fullscreen",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,

      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
