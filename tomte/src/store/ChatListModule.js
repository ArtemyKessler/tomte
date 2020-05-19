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
    filteredChatList(state) {
      let otherChats = [];
      const unreadChats = state.chatList.filter((item) => {
        if (!item.isUnreadMessages) {
          otherChats.push(item);
        }
        return item.isUnreadMessages;
      });
      return [...unreadChats, ...otherChats];
    },
  },
};

export default ChatListModule;
