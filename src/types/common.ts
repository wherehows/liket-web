import { ReactNode } from "react";

export type StrictPropsWithChildren<T = unknown, U = ReactNode> = T & {
  children: U;
};

export type EmptyFunction = () => void;
