import Vue from "vue";
import Vuex from "vuex";
import constants from "../data/mockupConstants";
import UserModule from "./UserModule";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    UserModule,
  },
  state: {
    isDrawerOpen: false,
    isSearchBar: true,
    pageHeaderText: "Sök",
    lastOpenedCard: {},
    cards: constants.items,
    lastSeenCards: [],
    wishListFilters: constants.wishListFilters,
    lastScrollPosition: 0,
    myOffers: constants.myOffers,
  },
  mutations: {
    setIsDrawerOpened(state, isOpened) {
      state.isDrawerOpen = isOpened;
    },
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
    updateFilterInWishList(state, data) {
      const newWishList = [
        data,
        ...state.wishListFilters.filter((item) => item.id !== data.id),
      ];
      state.wishListFilters = newWishList;
    },
    addFilterToWishList(state, data) {
      state.wishListFilters = [data, ...state.wishListFilters];
    },
    updateOfferInMyItems(state, data) {
      const newOffers = [
        data,
        ...state.myOffers.filter((item) => item.id !== data.id),
      ];
      state.myOffers = newOffers;
    },
    addOfferToMyItems(state, data) {
      state.myOffers = [data, ...state.myOffers];
    },
    addItems(state, data) {
      state.cards = [...state.cards, ...data];
    },
    refreshFirstPageItems(state, data) {
      state.cards = data;
    },
    setLastScrollPosition(state, data) {
      state.lastScrollPosition = data;
    },
  },
});

export default store;
