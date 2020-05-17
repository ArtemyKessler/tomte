const ChatListModule = {
  state: {
    chatList: [],
  },
  mutations: {
    setChatListData(state, data) {
      state.chatList = data;
    },
  },
  getters: {
    chatList(state) {
      return state.chatList;
    },
  },
};

export default ChatListModule;
