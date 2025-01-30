import axios from "axios";

const path = "http://localhost:30699/api/Users";

class LoginAndRegisterService {
  registerUser = (data) => {
    return axios.post(path, data);
  };

  loginUser = (data) => {
    return axios.post(path + "/" + data.Uemail + "?Upwd=" + data.Upwd);
  };

  forgotPassword = (data) => {
    return axios.get(path + "/" + data.Uemail);
  };
}
export default new LoginAndRegisterService();
