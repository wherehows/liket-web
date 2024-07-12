import {
  CheckAuthenticationParam,
  SendAuthenticationParam,
  LocalSignupParam,
  SocialSignupParam,
} from "./model";

import signupService from "./service";

const queryOptions = {
  send: () => ({
    mutationFn: (param: SendAuthenticationParam) => signupService.send(param),
  }),
  check: () => ({
    mutationFn: (param: CheckAuthenticationParam) => signupService.check(param),
  }),
  localSignup: () => ({
    mutationFn: (param: LocalSignupParam) => signupService.localSignup(param),
  }),
  socialSignup: () => ({
    mutationFn: (param: SocialSignupParam) => signupService.socialSignup(param),
  }),
};

export default queryOptions;
