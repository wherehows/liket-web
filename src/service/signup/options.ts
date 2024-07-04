import { CheckAuthenticationParam, SendAuthenticationParam } from "./model";
import signupService from "./service";

const queryOptions = {
  send: () => ({
    mutationFn: (param: SendAuthenticationParam) => signupService.send(param),
  }),
  check: () => ({
    mutationFn: (param: CheckAuthenticationParam) => signupService.check(param),
  }),
};

export default queryOptions;
