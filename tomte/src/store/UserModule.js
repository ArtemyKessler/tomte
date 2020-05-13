const UserModule = {
  state: {
    login: "",
    userPic: "",
    region: "",
  },
  mutations: {
    setUserData(state, data) {
      state.login = data.login;
      state.userPic = data.userPic;
      state.region = data.region;
    },
  },
  getters: {},
};

export default UserModule;
