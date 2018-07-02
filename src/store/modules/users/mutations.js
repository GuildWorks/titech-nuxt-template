import * as types from "./mutation-types";

export default {
  [types.FETCH_USERS](state, users) {
    state.all = users;
  }
}
