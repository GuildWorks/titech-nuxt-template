import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export const messages = {
  namespaced: true,
  state: {
    all: []
  },
  actions,
  getters,
  mutations
};
