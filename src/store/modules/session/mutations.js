import * as types from "./mutation-types";

export default {
  [types.SET_ACCESS_TOKEN](state, payload) {
    state.userSession.accessToken = payload;
  }
};
