import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d8606aa = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _55773a37 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _1832bcca = () => interopDefault(import('../pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _2d3de16f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0d8606aa,
    name: "about"
  }, {
    path: "/inspire",
    component: _55773a37,
    name: "inspire"
  }, {
    path: "/posts/:id?",
    component: _1832bcca,
    name: "posts-id"
  }, {
    path: "/",
    component: _2d3de16f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
