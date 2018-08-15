import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export const session = {
  namespaced: true,
  state: {
    userSession: {
      accessToken: null
    }
  },
  actions,
  getters,
  mutations
};
