import axios from "axios";

const path = "http://localhost:30699/api/Admins";

class AdminService {

  AddAdmin = (data) => {
    return axios.post(path, data);
  };

}
export default new AdminService();
