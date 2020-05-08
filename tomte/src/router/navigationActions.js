import router from "../router";
import { refreshFirstPageItems } from "../data/mockupRequests";
import { ROUTE_ALIAS } from "./RoutesAlias";

const navigationActions = {
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
};

export default navigationActions;
