import Service from "../service";
import { ResetPasswordParam } from "./model";

class ResetPasswordService extends Service {
  resetPassword(param: ResetPasswordParam) {
    return this.http.post("/apis/user/pw/find", param);
  }
}

const resetPasswordService = new ResetPasswordService();

export default resetPasswordService;
