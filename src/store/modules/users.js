import Vue from "vue";
import api from "@/api";

const users = {
  namespaced: true,
  state: {
    users: {}
  },
  actions: {
    FETCH_USERS({ commit }) {
      api
        .fetchUsers()
        .then(response => {
          commit("RECEIVE_USERS", response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    FETCH_USER({ commit }, uid) {
      api
        .fetchUser(uid)
        .then(response => {
          commit("RECEIVE_USER", response);
        })
        .catch(error => {
          console.log(error);
        });
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
