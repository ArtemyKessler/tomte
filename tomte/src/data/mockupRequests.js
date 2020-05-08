import store from "../store/index";
import { v1 as uuidv1 } from "uuid";
import constants from "../data/mockupConstants";
import mockupConstants from "../data/mockupConstants";
import { emailValidation, passwordValidation } from "../utils/validations";

export const login = (data) => {
  let isSuccessfullyLoged = true;

  if (emailValidation(data.login) && passwordValidation(data.password)) {
    data.userPic = mockupConstants.userInfo.userPic;
    data.region = mockupConstants.userInfo.region;
    store.commit("setUserData", data);
  } else {
    isSuccessfullyLoged = false;
  }
  return isSuccessfullyLoged;
};

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

export const refreshFirstPageItems = () => {
  const data = constants.items;
  store.commit("refreshFirstPageItems", data);
};

export const loadMoreItems = () => {
  const data = generateShit();
  store.commit("addItems", data);
};

const generateShit = () => {
  let data = [];
  for (let index = 0; index < 10; index++) {
    data.push({
      title: "Byxor 6",
      src: "https://www.mkostum.ru/media/productimages/bryki/26-1_fEtTOnh.jpg",
      category: "Kläder",
      tags: ["used", "branded"],
      region: "Malmö",
      id: uuidv1(),
    });
  }
  return data;
};
