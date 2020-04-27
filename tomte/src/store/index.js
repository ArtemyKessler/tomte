import Vue from "vue";
import Vuex from "vuex";
import ChatModule from "./ChatModule";
import constants from "../data/mockupConstants";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    chat: ChatModule,
  },
  state: {
    isSearchBar: true,
    pageHeaderText: "Sök",
    lastOpenedCard: {},
    cards: constants.items,
    lastSeenCards: [],
    wishListFilters: constants.wishListFilters,
  },
  mutations: {
    changePageHeaderText(state, info) {
      state.pageHeaderText = info.text;
      state.isSearchBar = info.isSearchBar;
    },
    setLastOpenedCard(state, card) {
      state.lastOpenedCard = card;
    },
    setLastSeenCards(state) {
      const card = state.lastOpenedCard;
      if (!state.lastSeenCards.find((oldCard) => oldCard.id === card.id)) {
        if (state.lastSeenCards.length > 9) {
          const splicedCards = state.lastSeenCards.slice(
            1,
            state.lastSeenCards.length
          );
          state.lastSeenCards = [card, ...splicedCards];
        } else {
          state.lastSeenCards = [card, ...state.lastSeenCards];
        }
      }
    },
  },
});

export default store;
