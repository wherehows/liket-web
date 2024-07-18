import { ResponseError } from "@/types/api";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import axios from "axios";

export const useCheckEmailDuplication = (
  props: UseMutationOptions<unknown, ResponseError, { email: string }>
) =>
  useMutation({
    ...props,
    mutationFn: (param: { email: string }) => {
      return axios.post("/apis/user/email/duplicate-check", param);
    },
  });
