import * as types from "./getter-types";

export default {
  [types.ACCESS_TOKEN](state) {
    return state.userSession.accessToken;
  }
};
