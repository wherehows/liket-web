import { TypographyScale, ButtonScale, colors } from "./src/utils/style";
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
    },
  },
  plugins: [],
};
export default config;
