export const GENRE_TYPES = [
  "팝업스토어",
  "전시회",
  "연극",
  "뮤지컬",
  "콘서트",
  "페스티벌",
] as const;

export type GenreType = (typeof GENRE_TYPES)[number];

export const CONTENT_STATES = [
  "active",
  "closed",
  "waiting",
  "willActive",
  "willClosed",
  "inactive",
] as const;

export type ContentStateType = (typeof CONTENT_STATES)[number];

export const CITIES = ["서울특별시", "인천광역시", "경기도"] as const;

export type CityType = (typeof CITIES)[number];

export const AGES = [
  "전체",
  "아이들",
  "10대",
  "20대",
  "30대",
  "4050대",
] as const;

export type AgeType = (typeof AGES)[number];

export const STYLES = [
  "혼자",
  "함께",
  "반려동물",
  "체험",
  "굿즈",
  "재미있는",
  "귀여운",
  "포토존",
  "세련된",
  "힙한",
  "미니멀",
  "편안한",
  "힐링",
  "핫한",
] as const;

export type StyleType = (typeof STYLES)[number];

export const ORDERS = ["최신순", "인기순"] as const;

export type OrderType = (typeof ORDERS)[number];
