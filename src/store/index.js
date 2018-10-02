import Vue from "vue";
import Vuex from "vuex";
import users from "./modules/users";
import shared from "./modules/shared";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    users,
    shared
  },
  strict: process.env.NODE_ENV !== "production"
});

export default store;
