import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import SignUp from "./views/SignUp.vue";
import SignUpComplete from "./views/SignUpComplete.vue";
import User from "./views/User.vue";
import Layout from "@/components/Layout.vue";

Vue.use(Router);

const Auth = {
  loggedIn: false,
  login: () => {
    this.loggedIn = true;
  },
  logout: () => {
    this.loggedIn = false;
  }
};

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
          meta: { requiresAuth: true }
        },
        {
          path: "/users",
          name: "users",
          component: Users
        },
        {
          path: "/users/new",
          name: "newUser",
          component: SignUp
        },
        {
          path: "/users/:userId",
          name: "user",
          component: User
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
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !Auth.loggedIn) {
    next({ path: "/sign_up", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
