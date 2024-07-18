import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { LoginParam } from "./model";
import queryOptions from "./options";
import { AxiosResponse } from "axios";

export const useLogin = (
  props: UseMutationOptions<
    AxiosResponse<{
      token: string;
    }>,
    Error,
    LoginParam,
    unknown
  >
) => useMutation({ ...queryOptions.login(), ...props });

export const useLogout = (props: UseMutationOptions) =>
  useMutation({ ...queryOptions.logout(), ...props });
