import React from "react";
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import "@smastrom/react-rating/style.css";
import { appleGothic } from "../src/app/layout";

const preview: Preview = {
  decorators: [
    (Story) => {
      return React.createElement(
        "div",
        { className: `${appleGothic.className} h-[100%] flex flex-col` },
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
    options: {
      storySort: {
        order: [
          "components",
          [
            "Button",
            "ButtonGroup",
            "IconButtonGroup",
            "Header",
            "FrontBackSwitch",
            "Toast",
            "Input",
            "BottomSheet",
          ],
        ],
      },
    },
  },
};

export default preview;
