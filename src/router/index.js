import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Users from "@/views/Users";
import User from "@/views/User";
import Layout from "@/views/Layout";

Vue.use(Router);

const router = new Router({
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
          component: User,
          props: true
        }
      ]
    }
  ]
});

export default router;
