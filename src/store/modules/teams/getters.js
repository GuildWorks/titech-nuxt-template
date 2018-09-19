import * as types from "./getter-types";

export default {
  [types.ALL_TEAMS](state) {
    return state.all;
  },
  [types.TEAM](state) {
    return id => state.all.find(team => team.id === Number(id));
  }
};
