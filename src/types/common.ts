import { ReactNode } from "react";

export type StrictPropsWithChildren<T = unknown, U = ReactNode> = T & {
  children: U;
};

export type EmptyFunction = () => void;

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

export type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

export type IconButtonOption = {
  disabled?: boolean;
  active?: boolean;
  color?: string;
  onClick?: EmptyFunction;
};

export type PartialPick<T, F extends keyof T> = Omit<T, F> &
  Partial<Pick<T, F>>;

export type RequireProperty<T, K extends keyof T> = T & Required<Pick<T, K>>;
