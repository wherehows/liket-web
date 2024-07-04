export interface SendAuthenticationParam {
  email: string;
  type: 0 | 1;
}

export interface CheckAuthenticationParam {
  email: string;
  type: 0 | 1;
  code: string;
}
