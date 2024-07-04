import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import queryOptions from "./options";
import { CheckAuthenticationParam, SendAuthenticationParam } from "./model";

export const useSendAuthentication = (
  props: UseMutationOptions<unknown, Error, SendAuthenticationParam, unknown>
) => useMutation({ ...queryOptions.send(), ...props });
export const useCheckAuthentication = (
  props: UseMutationOptions<unknown, Error, CheckAuthenticationParam, unknown>
) => useMutation({ ...queryOptions.check(), ...props });
