import * as types from "./action-types";
import * as mutationTypes from "./mutation-types";
import { _signIn, _signOut } from "@/session";

export default {
  [types.SIGN_IN](state, { email, password }) {
    return _signIn(email, password);
  },
  [types.SIGN_OUT]() {
    return _signOut();
  },
  [types.ON_AUTH_STATE_CHANGED]({ commit }, user) {
    commit(mutationTypes.ON_AUTH_STATE_CHANGED, { user });
  }
};
