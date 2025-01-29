import axios from "axios";

const path = "http://localhost:30699/api/Users";

class LoginAndRegisterService {


    registerUser = (data) => {
        return axios.post(path, data);
  }

  loginUser = (data) => {
    return axios.post(path + "/" + data.Uemail + "?Upwd=" + data.Upwd);
  }


}
export default new LoginAndRegisterService();
