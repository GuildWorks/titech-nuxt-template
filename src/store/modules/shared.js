const shared = {
  namespaced: true,
  state: {
    loading: false
  },
  getters: {
    LOADING(state) {
      return state.loading;
    }
  },
  actions: {
    SET_LOADING({ commit }, payload) {
      commit("SET_LOADING", payload);
    }
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    }
  }
};

export default shared;
