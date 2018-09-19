import * as types from "./getter-types";

export default {
  [types.LOGGED_IN](state) {
    return state.userSession.user.loggedIn;
  }
};
