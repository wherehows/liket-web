import { LoginParam } from "./model";
import signupService from "./service";

const queryOptions = {
  login: () => ({
    mutationFn: (param: LoginParam) => signupService.login(param),
  }),
  logout: () => ({
    mutationFn: () => signupService.logout(),
  }),
};

export default queryOptions;
