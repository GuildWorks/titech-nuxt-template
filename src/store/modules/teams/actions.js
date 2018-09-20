import * as types from "./action-types";
import * as mutationTypes from "./mutation-types";
import Firebase from "@/api/firebase";

export default {
  [types.FETCH_TEAMS]({ commit }) {
    Firebase.fetchTeams()
      .then(response => {
        commit(mutationTypes.RECEIVE_TEAMS, response);
      })
      .catch(error => {
        console.log(error);
      });
  },
  [types.FETCH_TEAM]({ commit }, uid) {
    Firebase.fetchTeam(uid)
      .then(response => {
        commit(mutationTypes.RECEIVE_TEAM, response);
      })
      .catch(error => {
        console.log(error);
      });
  },
  [types.JOIN_TEAM](state, { teamId, userId }) {
    Firebase.joinTeam(teamId, userId);
  }
};
