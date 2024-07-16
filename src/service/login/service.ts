import Service from "../service";
import { LoginParam } from "./model";

class SignupService extends Service {
  login(param: LoginParam) {
    return this.http.post("/apis/auth/local", param);
  }
  logout() {
    return this.http.delete("/apis/auth");
  }
}

const signupService = new SignupService();

export default signupService;
