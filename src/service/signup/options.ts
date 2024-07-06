import {
  CheckAuthenticationParam,
  SendAuthenticationParam,
  SignupParam,
} from "./model";
import signupService from "./service";

const queryOptions = {
  send: () => ({
    mutationFn: (param: SendAuthenticationParam) => signupService.send(param),
  }),
  check: () => ({
    mutationFn: (param: CheckAuthenticationParam) => signupService.check(param),
  }),
  signup: () => ({
    mutationFn: (param: SignupParam) => signupService.signup(param),
  }),
};

export default queryOptions;
