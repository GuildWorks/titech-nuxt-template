import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";
import SignUpComplete from "./views/SignUpComplete.vue";
import User from "./views/User.vue";
import Teams from "./views/teams/index.vue";
import Team from "./views/teams/show.vue";
import Layout from "@/components/Layout.vue";
import store from "@/store";
import defaultOptions from "@/storage/options.js";
import StorageFactory from "@/storage/storage.js";
import { SET_ACCESS_TOKEN } from "@/store/modules/session/mutation-types";

Vue.use(Router);

const hasValidAccessToken = () => {
  let options = Object.assign({}, defaultOptions);
  options.storageNamespace = process.env.VUE_APP_NAME + "-authenticate";
  const localStorage = StorageFactory(options);
  if (localStorage.getItem("token")) {
    // ToDo トークンが有効かどうかチェックする
    const token = JSON.parse(localStorage.getItem("token")).access_token;
    store.commit(`session/${SET_ACCESS_TOKEN}`, token);
    return token;
  } else {
    return false;
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
          component: Users,
          meta: { requiresAuth: true }
        },
        {
          path: "/users/:userId",
          name: "user",
          component: User,
          meta: { requiresAuth: true },
          props: true
        },
        {
          path: "/teams",
          name: "teams",
          component: Teams,
          meta: { requiresAuth: true }
        },
        {
          path: "/teams/:teamId",
          name: "team",
          component: Team,
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
