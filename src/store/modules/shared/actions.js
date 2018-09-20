import * as types from "./action-types";
import * as mutationTypes from "./mutation-types";

export default {
  [types.SET_LOADING]({ commit }, payload) {
    commit(mutationTypes.SET_LOADING, payload);
  }
};
