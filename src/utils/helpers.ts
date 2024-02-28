import { RefObject } from "react";

export const classNames = (...classes: (boolean | string)[]) =>
  classes.filter(Boolean).join(" ");

export const getKeys = Object.keys as <T extends object>(
  obj: T
) => Array<keyof T>;

export const getRefValue = <C>(ref: RefObject<C>) => ref.current as C;

export const generateRandomId = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let randomId = "";
  for (let i = 0; i < length; i++) {
    randomId += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return randomId;
};
