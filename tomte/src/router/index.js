import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import store from "../store";
import { ROUTE_ALIAS } from "./RoutesAlias";

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
  Profile: {
    text: "Redigera Profil",
    isSearchBar: false,
  },
};

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
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
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/ProfileEdit.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to !== from) {
    const headerInfo = headerTextAliases[to.name];
    if (to.path !== ROUTE_ALIAS.LOGIN) {
      store.commit("changePageHeaderText", headerInfo);
    }
    next();
  }
});

export default router;
