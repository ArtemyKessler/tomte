import Vue from "vue";
import Vuex from "vuex";
import constants from "../data/mockupConstants";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isSearchBar: true,
    pageHeaderText: "Sök",
    lastOpenedCard: {},
    cards: constants.items,
  },
  mutations: {
    changePageHeaderText(state, info) {
      state.pageHeaderText = info.text;
      state.isSearchBar = info.isSearchBar;
    },
    setLastOpenedCard(state, card) {
      state.lastOpenedCard = card;
    },
  },
});

export default store;
