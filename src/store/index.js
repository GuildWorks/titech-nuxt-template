import Vue from "vue";
import Vuex from "vuex";
import { users } from "./modules/users";
import { session } from "./modules/session";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    users,
    session
  },
  strict: process.env.NODE_ENV !== "production"
});

export default store;
