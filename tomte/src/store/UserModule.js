const UserModule = {
  state: {
    user: null,
  },
  mutations: {
    setUserData(state, data) {
      state.user = data;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
};

export default UserModule;
