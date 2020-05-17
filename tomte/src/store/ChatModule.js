const ChatModule = {
  state: {
    chat: null,
  },
  mutations: {
    setChatData(state, data) {
      state.chat = data;
    },
  },
  getters: {
    chat(state) {
      return state.chat;
    },
  },
};

export default ChatModule;
