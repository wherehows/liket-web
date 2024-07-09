import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export const useCheckEmailDuplication = (
  props: UseMutationOptions<
    unknown,
    AxiosError<{
      error: string;
      meesage: string;
      statusCode: number;
    }>,
    { email: string }
  >
) =>
  useMutation({
    ...props,
    mutationFn: (param: { email: string }) => {
      return axios.post("/apis/user/email/duplicate-check", param);
    },
  });
