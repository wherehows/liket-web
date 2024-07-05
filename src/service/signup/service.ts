import Service from "../service";
import { CheckAuthenticationParam, SendAuthenticationParam } from "./model";

class SignupService extends Service {
  send(param: SendAuthenticationParam) {
    return this.http.post("/apis/email-cert/send", param);
  }
  check(param: CheckAuthenticationParam) {
    return this.http.post("/apis/email-cert/check", param);
  }
}

const signupService = new SignupService();

export default signupService;
