import * as types from "./mutation-types";

export default {
  [types.ON_AUTH_STATE_CHANGED](state, { user }) {
    state.userSession.user = user;
  },
  [types.SIGN_OUT](state) {
    state.userSession.user.loggedIn = false;
    state.userSession.user.id = "";
    state.userSession.user.name = "";
    state.userSession.user.image = "";
  }
};
