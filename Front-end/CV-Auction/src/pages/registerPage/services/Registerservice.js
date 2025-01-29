import axios from "axios";

const path = "http://localhost:30699/api/Users";

class RegisterServices {


    registerUser = (data) => {
        return axios.post(path, data);
  }


}
export default new RegisterServices();
