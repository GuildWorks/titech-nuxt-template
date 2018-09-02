import * as types from "./mutation-types";

export default {
  [types.RECEIVE_TEAMS](state, teams) {
    state.all = teams;
  },
  [types.RECEIVE_TEAM](state, team) {
    if (state.all.map(_team => _team.id).includes(team.id)) {
      state.all = state.all.map(_team => {
        if (_team.id === Number(team.id)) return team;
        return _team;
      });
      return;
    }
    state.all.push(team);
  }
};
