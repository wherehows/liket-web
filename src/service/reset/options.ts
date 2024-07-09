import { ResetPasswordParam } from "./model";
import signupService from "./service";

const queryOptions = {
  resetPassword: () => ({
    mutationFn: (param: ResetPasswordParam) =>
      signupService.resetPassword(param),
  }),
};

export default queryOptions;
