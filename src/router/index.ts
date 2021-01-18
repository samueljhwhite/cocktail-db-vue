import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import Drinks from "@/views/Drinks/Drinks";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Drinks,
  // },
  {
    path: "/",
    name: "drinks",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "drinks" */ "@/views/Drinks/Drinks.vue")
  },
  {
    path: "/drinks/:id",
    name: "drinks.details",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "drinks.details" */ "@/views/Drinks/Drinks.vue")
  },
  {
    path: "/statistics",
    name: "statistics",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "statistics" */ "@/views/Statistics/Statistics.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
