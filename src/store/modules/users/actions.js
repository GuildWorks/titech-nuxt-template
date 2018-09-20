import * as types from "./action-types";
import * as mutationTypes from "./mutation-types";
import Firebase from "@/api/firebase";

export default {
  [types.FETCH_USERS]({ commit }) {
    Firebase.fetchUsers()
      .then(response => {
        commit(mutationTypes.RECEIVE_USERS, response);
      })
      .catch(error => {
        console.log(error);
      });
  },
  [types.FETCH_USER]({ commit }, uid) {
    Firebase.fetchUser(uid)
      .then(response => {
        commit(mutationTypes.RECEIVE_USER, response);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
