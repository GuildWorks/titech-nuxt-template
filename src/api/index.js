import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;

export default {
  users: {
    getData() {
      return axios.get("users");
    }
  }
};
