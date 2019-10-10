import Vue from "vue";
import Router from "vue-router";
import Element from "./views/Element.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "element",
      component: Element
    },
    {
      path: "/ant",
      name: "ant",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/Ant.vue")
    },
    {
      path: "/vue",
      name: "vue",
      component: () => import("./views/VueTest.vue")
    },
    {
      path: "/test",
      name: "test",
      component: () => import("./views/Test.vue")
    }
  ]
});
