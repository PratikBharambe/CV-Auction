import axios from "axios";

const path = "http://localhost:30699/LandingPage/";

class LandingPage {

  getLiveAuction = () => {
    return axios.get(path + "live");
  };

  getUpcomingAuction = () => {
    return axios.get(path + "upcoming");
  };

}

export default new LandingPage();
