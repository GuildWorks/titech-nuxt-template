import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export const usersStore = {
  state: {
    all: []
  },
  actions,
  getters,
  mutations
};

export * from "./mutation-types"
