import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Users from "@/views/Users";
import SignIn from "@/views/SignIn";
import SignUp from "@/views/SignUp";
import SignUpComplete from "@/views/SignUpComplete";
import User from "@/views/User";
import Teams from "@/views/Teams";
import Team from "@/views/Team";
import Layout from "@/views/Layout";
import AuthGuard from "./auth-guard";

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
          component: Home,
          beforeEnter: AuthGuard
        },
        {
          path: "/users",
          name: "users",
          component: Users,
          beforeEnter: AuthGuard
        },
        {
          path: "/users/:userId",
          name: "user",
          component: User,
          beforeEnter: AuthGuard,
          props: true
        },
        {
          path: "/teams",
          name: "teams",
          component: Teams,
          beforeEnter: AuthGuard
        },
        {
          path: "/teams/:teamId",
          name: "team",
          component: Team,
          beforeEnter: AuthGuard,
          props: true
        }
      ]
    },
    {
      path: "/sign_up",
      name: "signUp",
      component: SignUp
    },
    {
      path: "/sign_up/complete",
      name: "signUpComplete",
      component: SignUpComplete
    },
    {
      path: "/sign_in",
      name: "signIn",
      component: SignIn
    }
  ]
});

export default router;
