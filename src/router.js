import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";
import SignUpComplete from "./views/SignUpComplete.vue";
import User from "./views/User.vue";
import Layout from "@/components/Layout.vue";
import * as firebase from "firebase";

Vue.use(Router);

const hasValidAccessToken = () => {
  return firebase.auth().currentUser != null;
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
          component: Users,
          meta: { requiresAuth: true }
        },
        {
          path: "/users/:userId",
          name: "user",
          component: User,
          meta: { requiresAuth: true },
          props: true
        }
      ]
    },
    {
      path: "/sign_up",
      name: "signUp",
      component: SignUp,
      meta: { requiresAuth: false }
    },
    {
      path: "/sign_up/complete",
      name: "signUpComplete",
      component: SignUpComplete,
      meta: { requiresAuth: false }
    },
    {
      path: "/sign_in",
      name: "signIn",
      component: SignIn,
      meta: { requiresAuth: false }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (hasValidAccessToken()) {
    if (
      !from.matched.some(record => record.meta.requiresAuth) &&
      to.matched.some(record => record.meta.requiresAuth)
    ) {
      next();
    }
    if (
      from.matched.some(record => record.meta.requiresAuth) &&
      to.matched.some(record => record.meta.requiresAuth)
    ) {
      next();
    }
    if (
      from.matched.some(record => record.meta.requiresAuth) &&
      !to.matched.some(record => record.meta.requiresAuth)
    ) {
      next(false);
    }
    if (
      !from.matched.some(record => record.meta.requiresAuth) &&
      !to.matched.some(record => record.meta.requiresAuth)
    ) {
      next("/");
    }
  } else {
    if (
      !from.matched.some(record => record.meta.requiresAuth) &&
      !to.matched.some(record => record.meta.requiresAuth)
    ) {
      next();
    }
    if (
      from.matched.some(record => record.meta.requiresAuth) &&
      !to.matched.some(record => record.meta.requiresAuth)
    ) {
      next();
    }
    if (
      !from.matched.some(record => record.meta.requiresAuth) &&
      to.matched.some(record => record.meta.requiresAuth)
    ) {
      next("/sign_in");
    }
  }
});

export default router;
