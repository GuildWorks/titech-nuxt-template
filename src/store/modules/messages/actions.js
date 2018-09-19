import * as types from "./action-types";
import * as mutationTypes from "./mutation-types";

export default {
  [types.FETCH_MESSAGES]({ commit }) {
    commit(mutationTypes.RECEIVE_MESSAGES, []);
  }
};
