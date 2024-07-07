import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { LoginParam } from "./model";
import queryOptions from "./options";

export const useLogin = (
  props: UseMutationOptions<unknown, Error, LoginParam, unknown>
) => useMutation({ ...queryOptions.login(), ...props });
