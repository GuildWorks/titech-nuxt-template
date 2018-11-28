import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Users from "@/views/Users";
import User from "@/views/User";
import Layout from "@/views/Layout";
import Teams from "@/views/Teams";
import Team from "@/views/Team";

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
        },
        {
          path: "/teams",
          name: "teams",
          component: Teams
        },
        {
          path: "/teams/:teamId",
          name: "team",
          component: Team,
          props: true
        }
      ]
    }
  ]
});

export default router;
