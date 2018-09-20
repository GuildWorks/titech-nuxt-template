import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export const shared = {
  namespaced: true,
  state: {
    loading: false
  },
  actions,
  getters,
  mutations
};
