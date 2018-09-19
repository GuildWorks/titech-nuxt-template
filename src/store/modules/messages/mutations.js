import * as types from "./mutation-types";

export default {
  [types.RECEIVE_MESSAGES](state, messages) {
    state.all = messages;
  }
};
