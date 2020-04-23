import store from "../store/index";

export const refreshItem = (itemId) => {
  const item = store.state.cards.find((item) => item.id === itemId);
  store.commit("setLastOpenedCard", item);
};
