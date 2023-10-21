export const Icons = [
  'back',
  'share',
  'search',
  'setting',
  'kebab',
  'home',
  'home_filled',
  'mypage',
  'mypage_filled',
  'marker',
  'marker_filled'
] as const;

export type IconName = (typeof Icons)[number];
