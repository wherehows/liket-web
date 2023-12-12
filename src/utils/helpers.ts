export const classNames = (...classes: (boolean | string)[]) =>
  classes.filter(Boolean).join(" ");

export const getKeys = Object.keys as <T extends object>(
  obj: T
) => Array<keyof T>;
