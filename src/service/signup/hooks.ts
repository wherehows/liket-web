import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import queryOptions from "./options";
import {
  CheckAuthenticationParam,
  CheckAuthenticationResponse,
  SendAuthenticationParam,
  SignupParam,
} from "./model";

export const useSendAuthentication = (
  props: UseMutationOptions<unknown, Error, SendAuthenticationParam, unknown>
) => useMutation({ ...queryOptions.send(), ...props });

export const useCheckAuthentication = (
  props: UseMutationOptions<
    CheckAuthenticationResponse,
    Error,
    CheckAuthenticationParam,
    unknown
  >
) => useMutation({ ...queryOptions.check(), ...props });

export const useSignup = (
  props: UseMutationOptions<unknown, Error, SignupParam, unknown>
) => useMutation({ ...queryOptions.signup(), ...props });
