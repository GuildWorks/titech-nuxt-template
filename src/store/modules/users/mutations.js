import * as types from "./mutation-types";

export default {
  [types.RECEIVE_USERS](state, users) {
    state.all = users;
  },
  [types.RECEIVE_USER](state, user) {
    if (state.all.map(_user => _user.id).includes(user.id)) {
      state.all = state.all.map(_user => {
        if (_user.id === user.id) return user;
        return _user;
      });
      return;
    }
    state.all.push(user);
  }
};
