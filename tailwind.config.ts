import {
  TypographyScale,
  ButtonScale,
  colors,
  LIKET_CARD_HEIGHT,
  LIKET_CARD_WIDTH,
} from "./src/utils/style";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "390px",
      },
      fontSize: { ...TypographyScale, ...ButtonScale },
      colors,
      width: {
        "liket-card": LIKET_CARD_WIDTH,
      },
      height: {
        "liket-card": LIKET_CARD_HEIGHT,
      },
      maxWidth: {
        content: contentWidth,
      },
    },
  },
  plugins: [],
};
export default config;
