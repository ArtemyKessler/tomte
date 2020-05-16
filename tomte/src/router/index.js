import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import store from "../store";
import { isInsideTheApp } from "./RoutesAlias";
import AuthGuard from "./guard";

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
  MyItems: {
    text: "Mina erbjudanden",
    isSearchBar: false,
  },
  MyChats: {
    text: "Mina Chattar",
    isSearchBar: true,
  },
  Chat: {
    text: "Chatt",
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
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/forgotPassword",
    name: "ForgotPassword",
    component: () => import("../views/ForgotPassword.vue"),
  },
  {
    path: "/setNewPassword",
    name: "ChangePassword",
    component: () => import("../views/SetNewPassword.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    beforeEnter: AuthGuard,
  },
  {
    path: "/about/:id",
    name: "About",
    component: () => import("../views/About.vue"),
    beforeEnter: AuthGuard,
  },
  {
    path: "/wishList",
    name: "WishList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WishList.vue"),
    beforeEnter: AuthGuard,
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/ProfileEdit.vue"),
    beforeEnter: AuthGuard,
  },
  {
    path: "/myItems",
    name: "MyItems",
    component: () => import("../views/MyItems.vue"),
    beforeEnter: AuthGuard,
  },
  {
    path: "/chats",
    name: "MyChats",
    component: () => import("../views/ChatList.vue"),
    beforeEnter: AuthGuard,
  },
  {
    path: "/chat/:id",
    name: "Chat",
    component: () => import("../views/Chat.vue"),
    beforeEnter: AuthGuard,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to !== from) {
    const headerInfo = headerTextAliases[to.name];
    if (isInsideTheApp(to.path)) {
      store.commit("changePageHeaderText", headerInfo);
    }
    next();
  }
});

export default router;
