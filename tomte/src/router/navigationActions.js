import router from "../router";

const navigationActions = {
  navigateToHome: function(params) {
    router.push({ name: "Home", params });
  },
  navigateToAbout: function(id, params) {
    router.push({ path: `about/${id}`, params });
  },
  navigateToWishList: function(params) {
    router.push({ name: "WishList", params });
  },
};

export default navigationActions;
