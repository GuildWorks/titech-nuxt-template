import * as types from "./mutation-types";

export default {
  [types.RECEIVE_TEAMS](state, teams) {
    state.all = teams;
  }
};
