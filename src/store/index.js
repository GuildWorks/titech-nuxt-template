import Vue from "vue";
import Vuex from "vuex";
import { usersStore } from "./modules/users";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    usersStore
  }
});

export default store;
