import * as types from "./action-types";
import * as mutationTypes from "./mutation-types";
import { _signIn, _signOut, _signUp } from "@/session";

export default {
  [types.SIGN_IN](state, { email, password }) {
    return _signIn(email, password);
  },
  [types.SIGN_OUT]() {
    return _signOut();
  },
  [types.SIGN_UP](state, { name, email, password }) {
    return _signUp(name, email, password);
  },
  [types.ON_AUTH_STATE_CHANGED]({ commit }, user) {
    commit(mutationTypes.ON_AUTH_STATE_CHANGED, { user });
  }
};
