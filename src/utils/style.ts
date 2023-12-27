import { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

type FontSize = ResolvableTo<
  KeyValuePair<
    string,
    | string
    | [fontSize: string, lineHeight: string]
    | [
        fontSize: string,
        configuration: Partial<{
          lineHeight: string;
          letterSpacing: string;
          fontWeight: string | number;
        }>
      ]
  >
>;

const TypographyScale: FontSize = {
  h1: [
    "18px",
    {
      fontWeight: 700,
    },
  ],
  h2: [
    "16px",
    {
      lineHeight: "20px",
      fontWeight: 700,
    },
  ],
  body1: [
    "14px",
    {
      lineHeight: "20px",
      fontWeight: 700,
    },
  ],
  body2: [
    "14px",
    {
      fontWeight: 700,
    },
  ],
  body3: [
    "14px",
    {
      lineHeight: "20px",
      fontWeight: 400,
    },
  ],
  body4: [
    "12px",
    {
      fontWeight: 700,
    },
  ],
  body5: ["12px", { lineHeight: "16px", fontWeight: 400 }],
  caption: [
    "12px",
    {
      fontWeight: 700,
    },
  ],
  flag: [
    "12px",
    {
      fontWeight: 700,
    },
  ],
  numbering1: [
    "16px",
    {
      fontWeight: 800,
    },
  ],
  numbering2: [
    "12px",
    {
      fontWeight: 800,
    },
  ],
  numbering3: [
    "12px",
    {
      fontWeight: 400,
    },
  ],
};

const ButtonScale: FontSize = {
  button1: ["16px", { fontWeight: 700 }],
  button2: ["16px", { fontWeight: 400 }],
  button3: ["14px", { fontWeight: 700 }],
  button4: ["14px", { fontWeight: 400 }],
  button5: ["12px", { fontWeight: 700 }],
  button6: ["12px", { fontWeight: 400 }],
};

const colors = {
  grey: {
    black: "rgba(0, 0, 0, 1)",
    "01": "rgba(240, 240, 240, 1)",
    "02": "rgba(217, 217, 217, 1)",
    "03": "rgba(176, 176, 176, 1)",
    "04": "rgba(124, 124, 124, 1)",
    white: "rgba(255, 255, 255, 1)",
  },
  skyblue: {
    "01": "#00C2FF",
    "02": "#00A6DB",
    "03": "#0088B4",
  },
  rosepink: {
    "01": "#FF005C",
  },
  red: "#e0483f",
  orange: "#ec682c",
  yellow: "#f5d949",
  green: "#4eab87",
  blue: "#3b85ca",
  purple: "#45098c",
};

export type TypographyVariant = keyof typeof TypographyScale;

export type ButtonVariant = keyof typeof ButtonScale;

export { TypographyScale, ButtonScale, colors };
