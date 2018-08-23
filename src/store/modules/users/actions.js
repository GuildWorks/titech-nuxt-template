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
  [types.FETCH_USER]({ commit }, userId) {
    api.users
      .getDataBy(userId)
      .then(response => {
        commit(mutationTypes.RECEIVE_USER, response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
