import * as types from "./action-types";
import * as mutationTypes from "./mutation-types";
import api from "@/api";

export default {
  [types.FETCH_USERS]({ commit }) {
    api.users
      .getData()
      .then(response => {
        commit(mutationTypes.RECEIVE_USERS, response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  [types.CREATE_USER]({ commit }, params) {
    api.users
      .createData(params)
      .then(response => {
        console.log(commit);
        console.log(response.data);
        // commit(mutationTypes.ADD_USERS, response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
