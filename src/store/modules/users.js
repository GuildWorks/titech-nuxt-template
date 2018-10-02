import Vue from "vue";
import api from "@/api";

const users = {
  namespaced: true,
  state: {
    users: {}
  },
  actions: {
    FETCH_USERS({ commit }) {
      const response = api.fetchUsers();
      commit("RECEIVE_USERS", response);
    },
    FETCH_USER({ commit }, uid) {
      const response = api.fetchUser(uid);
      commit("RECEIVE_USER", response);
    }
  },
  getters: {
    ALL_USERS(state) {
      return Object.values(state.users);
    },
    USER(state) {
      return id => state.users[Number(id)];
    }
  },
  mutations: {
    RECEIVE_USERS(state, users) {
      users.forEach(user => {
        if (user) {
          Vue.set(state.users, user.id, user);
        }
      });
    },
    RECEIVE_USER(state, user) {
      if (user) {
        Vue.set(state.users, user.id, user);
      }
    }
  }
};

export default users;
