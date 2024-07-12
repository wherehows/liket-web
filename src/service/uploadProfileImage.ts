import { ResponseError } from "@/types/api";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export const useUploadProfileImage = (
  props: UseMutationOptions<
    AxiosResponse<{
      fullUrl: string;
      fileName: string;
      fileExt: string;
      filePath: string;
    }>,
    ResponseError,
    string
  >
) =>
  useMutation({
    ...props,
    mutationFn: (param: string) => {
      return axios.post("/apis/upload/profile-img", param);
    },
  });
