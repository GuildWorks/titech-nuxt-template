import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
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
        }
      ]
    }
  ]
});

export default router;
