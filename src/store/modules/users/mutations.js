import * as types from "./mutation-types";

export default {
  [types.RECEIVE_USERS](state, users) {
    state.all = users;
  }
};
