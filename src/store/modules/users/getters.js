import * as types from "./getter-types";

export default {
  [types.ALL_USERS](state) {
    return state.all;
  },
  [types.USER](state) {
    return id => state.all.find(user => user.id === Number(id));
  }
};
