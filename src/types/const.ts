import {
  AGES,
  CITIES,
  CONTENT_STATES,
  GENRES,
  ORDERS,
  STYLES,
} from "@/utils/const";
export type GenreType = (typeof GENRES)[number];
export type ContentStateType = (typeof CONTENT_STATES)[number];
export type CityType = (typeof CITIES)[number];
export type AgeType = (typeof AGES)[number];
export type StyleType = (typeof STYLES)[number];
export type OrderType = (typeof ORDERS)[number];
