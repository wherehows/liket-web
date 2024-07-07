import { LoginParam } from "./model";
import signupService from "./service";

const queryOptions = {
  login: () => ({
    mutationFn: (param: LoginParam) => signupService.login(param),
  }),
};

export default queryOptions;
