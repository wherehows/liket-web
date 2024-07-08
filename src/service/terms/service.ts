import Service from "../service";

class TosService extends Service {
  async tosList() {
    const { data } = await this.http.get("/apis/tos/all");
    return data;
  }
  async detailTos(param: number) {
    const { data } = await this.http.get("/apis/tos/" + param);
    return data;
  }
}

const signupService = new TosService();

export default signupService;
