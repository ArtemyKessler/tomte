import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const headerTextAliases = {
  Home: {
    text: "Sök",
    isSearchBar: true,
  },
  About: {
    text: "Information",
    isSearchBar: false,
  },
  WishList: {
    text: "Önskelista",
    isSearchBar: true,
  },
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about/:id",
    name: "About",
    component: () => import("../views/About.vue"),
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
  const headerInfo = headerTextAliases[to.name];
  store.commit("changePageHeaderText", headerInfo);
  next();
});

export default router;
