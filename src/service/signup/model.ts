import { ProfileFormData } from "@/types/signup";
import { AxiosResponse } from "axios";

export interface SendAuthenticationParam {
  email: string;
  type: 0 | 1;
}

export interface CheckAuthenticationParam {
  email: string;
  type: 0 | 1;
  code: string;
}

export interface SignupParam extends ProfileFormData {
  emailToken: string;
  password: string;
}

export type CheckAuthenticationResponse = AxiosResponse<{
  token: string;
}>;
