import Service from "../service";
import {
  CheckAuthenticationParam,
  SendAuthenticationParam,
  SignupParam,
} from "./model";


class SignupService extends Service {
  send(param: SendAuthenticationParam) {
    return this.http.post("/apis/email-cert/send", param);
  }
  check(param: CheckAuthenticationParam) {
    return this.http.post("/apis/email-cert/check", param);
  }
  signup(param: SignupParam) {
    return this.http.post("/user/local", param, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

const signupService = new SignupService();

export default signupService;
