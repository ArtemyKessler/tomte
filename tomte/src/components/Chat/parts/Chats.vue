<template>
  <v-list subheader>
    <v-subheader>Your Chats</v-subheader>
    <v-list-item
      avatar
      v-for="(chat) in chatList"
      v-bind:key="chat.id"
      @click="onChatClick(chat.id)"
    >
      <v-list-item-content>
        <v-list-item-title v-html="chat.name"></v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-icon>mdi-chat</v-icon>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
import { loadUserChats } from "../../../data/mockupRequests";
import { mapGetters } from "vuex";
import navigationActions from "../../../router/navigationActions";
export default {
  created() {
    loadUserChats();
  },
  computed: {
    ...mapGetters(["chatList"])
  },
  methods: {
    onChatClick: function(id) {
      navigationActions.navigateToChat(id);
    }
  }
};
</script>
