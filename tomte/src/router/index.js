import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const headerTextAliases = {
  Home: "Sök",
  About: "Information",
  WishList: "Din Önskelista",
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    props: true,
  },
  {
    path: "/wishList",
    name: "WishList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WishList.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const headerText = headerTextAliases[to.name];
  store.commit("changePageHeaderText", headerText);
  next();
});

export default router;
