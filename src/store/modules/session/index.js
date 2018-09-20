import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export const session = {
  namespaced: true,
  state: {
    userSession: {
      user: {
        loggedIn: false,
        id: "",
        name: "",
        image: ""
      }
    }
  },
  actions,
  getters,
  mutations
};
