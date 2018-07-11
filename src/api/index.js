import axios from "axios";

axios.defaults.baseURL = `${process.env.VUE_APP_API_ENDPOINT}/api`;

export default {
  users: {
    getData() {
      return axios.get("users");
    },
    createData(params) {
      return axios.post("users", params);
    },
  }
};
