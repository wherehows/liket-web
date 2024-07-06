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

export interface SignupParam {
  emailToken: string;
  password: string;
  gender: 1 | 2;
  birth: number;
  file: string;
  nickname: string;
}

export type CheckAuthenticationResponse = AxiosResponse<{
  token: string;
}>;