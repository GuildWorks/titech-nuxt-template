import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import User from "./views/User.vue";
import Layout from "@/components/Layout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      redirect: { name: "home" },
      children: [
        {
          path: "/home",
          name: "home",
          component: Home
        },
        {
          path: "/users",
          name: "users",
          component: Users
        },
        {
          path: "/users/:userId",
          name: "user",
          component: User
        }
      ]
    }
  ]
});
