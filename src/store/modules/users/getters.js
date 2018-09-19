import * as types from "./getter-types";

export default {
  [types.ALL_USERS](state) {
    return state.all;
  },
  [types.USER](state) {
    return id => state.all.find(user => user.id === id);
  },
  [types.USERS_BELONGS_TO_TEAMS](state) {
    return teamId =>
      state.all.filter(user => {
        if (user.team) {
          return user.team.id === teamId;
        }
        return false;
      });
  }
};
