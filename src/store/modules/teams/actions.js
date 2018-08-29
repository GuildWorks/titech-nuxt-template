import * as types from "./action-types";
import * as mutationTypes from "./mutation-types";
import api from "@/api";

export default {
  [types.FETCH_TEAMS]({ commit }) {
    api.teams
      .getData()
      .then(response => {
        commit(mutationTypes.RECEIVE_TEAMS, response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
