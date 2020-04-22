import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    pageHeaderText: "Sök",
    cards: [
      {
        title: "Iphone",
        src:
          "https://www.ixbt.com/img/n1/news/2020/3/6/Big-iPhone-12-Pro-leak-details-64MP-cameras-bigger-battery-notch-plans-5G-and-more_large.jpg",
        flex: 3,
      },
      {
        title: "Soffan",
        src: "https://arama.md/images/stories/vikatnoi.jpg",
        flex: 3,
      },
      {
        title: "Byxor",
        src:
          "https://www.mkostum.ru/media/productimages/bryki/26-1_fEtTOnh.jpg",
        flex: 3,
      },
      {
        title: "IphSSone",
        src:
          "https://www.ixbt.com/img/n1/news/2020/3/6/Big-iPhone-12-Pro-leak-details-64MP-cameras-bigger-battery-notch-plans-5G-and-more_large.jpg",
        flex: 3,
      },
      {
        title: "SoffDDan",
        src: "https://arama.md/images/stories/vikatnoi.jpg",
        flex: 3,
      },
      {
        title: "FFF",
        src:
          "https://www.mkostum.ru/media/productimages/bryki/26-1_fEtTOnh.jpg",
        flex: 3,
      },
      {
        title: "GG",
        src:
          "https://www.ixbt.com/img/n1/news/2020/3/6/Big-iPhone-12-Pro-leak-details-64MP-cameras-bigger-battery-notch-plans-5G-and-more_large.jpg",
        flex: 3,
      },
      {
        title: "SoffSDan",
        src: "https://arama.md/images/stories/vikatnoi.jpg",
        flex: 3,
      },
      {
        title: "ByFGxor",
        src:
          "https://www.mkostum.ru/media/productimages/bryki/26-1_fEtTOnh.jpg",
        flex: 3,
      },
      {
        title: "IphoXCVVne",
        src:
          "https://www.ixbt.com/img/n1/news/2020/3/6/Big-iPhone-12-Pro-leak-details-64MP-cameras-bigger-battery-notch-plans-5G-and-more_large.jpg",
        flex: 3,
      },
      {
        title: "SoHGDEGRffan",
        src: "https://arama.md/images/stories/vikatnoi.jpg",
        flex: 3,
      },
      {
        title: "ByDSFxor",
        src:
          "https://www.mkostum.ru/media/productimages/bryki/26-1_fEtTOnh.jpg",
        flex: 3,
      },
    ],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    changePageHeaderText(state, text) {
      state.pageHeaderText = text;
    },
  },
});

export default store;
