import router from "../router";

const navigationActions = {
  navigateToHome: function(params) {
    router.push({ name: "Home", params });
  },
  navigateToAbout: function(params) {
    router.push({ name: "About", params });
  },
  navigateToWishList: function(params) {
    router.push({ name: "WishList", params });
  },
};

export default navigationActions;
