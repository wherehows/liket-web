export const GENRES = [
  "팝업스토어",
  "전시회",
  "연극",
  "뮤지컬",
  "콘서트",
  "페스티벌",
] as const;

export type GENRESType = (typeof GENRES)[number];

export const CONTENT_STATUS = [
  "active",
  "closed",
  "waiting",
  "willActive",
  "willClosed",
  "inactive",
] as const;

export type CONTENT_STATUSType = (typeof CONTENT_STATUS)[number];

export const CITYS = ["서울특별시", "인천광역시", "경기도"] as const;

export type CITYSType = (typeof CITYS)[number];

export const AGES = [
  "전체",
  "아이들",
  "10대",
  "20대",
  "30대",
  "4050대",
] as const;

export type AGESType = (typeof AGES)[number];

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

export type STYLESType = (typeof STYLES)[number];

export const ORDER_TYPES = ["최신순", "인기순"] as const;

export type ORDER_TYPETypes = (typeof ORDER_TYPES)[number];
