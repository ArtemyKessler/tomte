import store from "../store/index";
import { v1 as uuidv1 } from "uuid";

export const refreshItem = (itemId) => {
  const item = store.state.cards.find((item) => item.id === itemId);
  store.commit("setLastOpenedCard", item);
};

export const updateFilterInWishList = (data) => {
  store.commit("updateFilterInWishList", data);
};

export const addFilterToWishList = (data) => {
  data.id = uuidv1();
  store.commit("addFilterToWishList", data);
};
