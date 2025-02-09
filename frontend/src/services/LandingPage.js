import axios from "axios";

const live = 'https://localhost:44358/api';
const upcoming = 'https://localhost:44358/api';

class LandingPage {

  getLiveAuction = () => {
    return axios.get(`${live}/currentAuction`);
  };

  getUpcomingAuction = () => {
    return axios.get(`${upcoming}/HostAuction`);
  };

}

export default new LandingPage();
