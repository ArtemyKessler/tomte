import store from "../store/index";
import { v1 as uuidv1 } from "uuid";
import constants from "../data/mockupConstants";
import mockupConstants from "../data/mockupConstants";
import {
  emailValidation,
  passwordValidation,
  codeValidation,
  loginValidation,
} from "../utils/validations";

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

export const register = (data) => {
  const isValidEmail = emailValidation(data.email);
  const isValidLogin = loginValidation(data.login);
  const isValidPassword = passwordValidation(data.password);
  const isValidConfirmPassword = passwordValidation(data.confirmPassword);
  const isPasswordsMatch = data.password === data.confirmPassword;
  const isValidData =
    isValidEmail &&
    isValidLogin &&
    isValidPassword &&
    isValidConfirmPassword &&
    isPasswordsMatch;
  return isValidData;
};

export const sentForgotPasswordEmail = (email) => {
  if (emailValidation(email)) {
    return true;
  } else {
    alert("E-postadressen är felaktig");
  }
};

export const changePassword = (data) => {
  const isValidCode = codeValidation(data.code);
  const isValidPassword = passwordValidation(data.password);
  const isValidConfirmPassword = passwordValidation(data.confirmPassword);
  const isPasswordsMatch = data.password === data.confirmPassword;
  const isValidData =
    isValidCode &&
    isValidPassword &&
    isValidConfirmPassword &&
    isPasswordsMatch;
  return isValidData;
};

export const updateProfile = (userData) => {
  store.commit("setUserData", userData);
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

export const updateOfferInMyItems = (data) => {
  store.commit("updateOfferInMyItems", data);
};

export const addOfferToMyItems = (data) => {
  data.id = uuidv1();
  store.commit("addOfferToMyItems", data);
};

export const refreshFirstPageItems = () => {
  const data = constants.items;
  store.commit("refreshFirstPageItems", data);
};

export const loadItemCards = () => {
  const data = constants.items;
  store.commit("setItemCards", data);
};

export const loadUserChats = () => {
  const data = constants.myChats;
  store.commit("setChatListData", data);
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
