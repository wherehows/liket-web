export const GENRES = [
  "팝업 스토어",
  "전시회",
  "연극",
  "뮤지컬",
  "콘서트",
  "페스티벌",
] as const;

export type GENRESType = (typeof GENRES)[number];

export const CONTENT_STATUS = [
  "active",
  "inactive",
  "closed",
  "waiting",
  "willActive",
  "willClosed",
] as const;

export type CONTENT_STATUSType = (typeof CONTENT_STATUS)[number];
