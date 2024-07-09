import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ResetPasswordParam } from "./model";
import queryOptions from "./options";

export const useResetPassword = (
  props: UseMutationOptions<unknown, Error, ResetPasswordParam, unknown>
) => useMutation({ ...queryOptions.resetPassword(), ...props });
