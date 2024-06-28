import {
  AGES,
  CITIES,
  CONTENT_STATES,
  GENRE_TYPES,
  ORDERS,
  STYLES,
} from "@/utils/const";

export type GenreType = (typeof GENRE_TYPES)[number];
export type ContentStateType = (typeof CONTENT_STATES)[number];
export type CityType = (typeof CITIES)[number];
export type AgeType = (typeof AGES)[number];
export type StyleType = (typeof STYLES)[number];
export type OrderType = (typeof ORDERS)[number];
