import Vue from "vue";
import Vuex from "vuex";
import { users } from "./modules/users";
import { teams } from "./modules/teams";
import { session } from "./modules/session";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    users,
    teams,
    session
  },
  strict: process.env.NODE_ENV !== "production"
});

export default store;
