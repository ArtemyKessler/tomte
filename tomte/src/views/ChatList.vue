<template>
  <v-container v-on:scroll="onScroll" ref="chatlistContainer">
    <v-row no-gutters>
      <v-col v-for="(chat, index) in filteredChatList" :key="chat.name" cols="12" sm="4">
        <v-card class="mx-1 my-1" max-width="344" outlined>
          <v-badge v-if="chat.isUnreadMessages" bordered color="error" icon="mdi-message" overlap></v-badge>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{index + 1}}</div>
              <v-list-item-title class="headline mb-1">{{chat.name}}</v-list-item-title>
              <v-list-item-subtitle>Samtalets ämne var {{chat.subject}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn text @click="enterChat(chat)">Gå till chatten</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import navigationActions from "../router/navigationActions";
import { loadUserChats } from "../data/mockupRequests";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      loadedChats: [],
      loading: false
    };
  },
  computed: {
    ...mapGetters(["user", "filteredChatList"])
    // user() {
    //   return this.$store.getters.user;
    // },
  },
  methods: {
    loadRecentChats(lastKey) {
      console.log(lastKey);
      // let that = this;
      // firebase.database().ref('chats').orderByKey().limitToLast(20).once("value", function(snapshot) {
      //   snapshot.forEach(function(childSnapshot) {
      //     let chat = childSnapshot.val()
      //     chat.key = childSnapshot.key
      //     that.getUserCountForChat(chat)
      //     that.loadedChats.unshift(chat)
      //   })
      // })
    },
    loadRecentChatsByLastKey(lastKey) {
      console.log(lastKey);
      // let that = this;
      // that.loading = true;
      // firebase.database().ref('chats').orderByKey().endAt(lastKey).limitToLast(20).once("value", function(snapshot) {
      //   let tempArray = []
      //   snapshot.forEach(function (item) {
      //     if(item.key != lastKey) {
      //       let newChat = item.val()
      //       newChat.key = item.key
      //       tempArray.push(newChat)
      //     }
      //   })
      //   if (tempArray[0].key === tempArray[1].key) return
      //   tempArray.reverse()
      //   tempArray.forEach(function (child) {
      //     that.getUserCountForChat(child)
      //     that.loadedChats.push(child)
      //   })
      //   that.loading = false
      // })
    },
    enterChat(chat) {
      console.log("Chat", chat);
      navigationActions.navigateToChat(chat.id);
      // if (chat.isAlreadyJoined || chat.userCount == null) {
      //   return;
      // }
      // let chatId = chat.key;
      // let time = new Date().valueOf();
      // let updates = {};
      // updates["/chat_members/" + chatId + "/users/" + this.user.id] = {
      //   timestamp: time
      // };
      // updates["users/" + this.user.id + "/chats/" + chatId] = {
      //   timestamp: time
      // };
      // let that = this;
      // firebase.database().ref().update(updates).then(() => {
      //   this.$router.push('/chat/' + chatId)
      // })
    },
    onScroll() {
      if (
        window.top.scrollY + window.innerHeight >=
          document.body.scrollHeight - 100 &&
        !this.loading
      ) {
        this
          .loadRecentChatsByLastKey
          // this.loadedChats[this.loadedChats.length - 1].key
          ();
      }
    },
    getUserCountForChat(chat) {
      console.log(chat);
      // let that = this;
      // firebase.database().ref('chat_members').child(chat.key).child("users").once("value", function(snapshot) {
      //   that.$set(chat, "userCount", snapshot.numChildren())
      //   snapshot.forEach((user) => {
      //     if(user.key == that.user.id) {
      //       that.$set(chat, "isAlreadyJoined", true)
      //     }
      //   })
      // })
    }
  },
  created() {
    loadUserChats();
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  watch: {
    loadedChats: {
      deep: true,
      handler() {}
    }
  }
};
</script>