import router from "../router";
import { refreshFirstPageItems } from "../data/mockupRequests";
import { ROUTE_ALIAS } from "./RoutesAlias";

const navigationActions = {
  navigateToLogin: function(params) {
    router.push({ path: `/`, params });
  },
  navigateToRegister: function(params) {
    router.push({ path: `/register`, params });
  },
  navigateToForgetPassword: function(params) {
    router.push({ path: `/forgotPassword`, params });
  },
  navigateToSetNewPassword: function(params) {
    router.push({ path: `/setNewPassword`, params });
  },
  navigateToHome: function(params) {
    if (router.currentRoute.path !== ROUTE_ALIAS.HOME) {
      router.push({ path: ROUTE_ALIAS.HOME, params });
    } else {
      refreshFirstPageItems();
    }
  },
  navigateToAbout: function(id, params) {
    router.push({ path: `/about/${id}`, params });
  },
  navigateToWishList: function(params) {
    router.push({ name: "WishList", params });
  },
  navigateToProfile: function(params) {
    router.push({ path: "/profile", params });
  },
  navigateToMyItems: function(params) {
    router.push({ path: "/myItems", params });
  },
};

export default navigationActions;
