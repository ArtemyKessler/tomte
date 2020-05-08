<template>
  <div class="about">
    <div class="d-flex my-2">
      <AboutCard :toggleChat="this.toggleChat" :isChatOpened="this.isChatOpened"></AboutCard>
      <Chat v-if="this.isChatOpened"></Chat>
      <SideItemList max-width="100" :cards="this.lastSeenCards" v-if="this.isLastSeenNotEmpty"></SideItemList>
      <div></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.chipGroup {
  margin-left: 1vw;
}

.itemTitle {
  mix-blend-mode: difference;
}
</style>

<script>
import { mapState, mapMutations } from "vuex";
import { refreshItem } from "../data/mockupRequests";
import Chat from "../components/chat";
import SideItemList from "../components/sideItemList";
import AboutCard from "../components/AboutCard";

export default {
  name: "About",
  computed: {
    ...mapState(["lastOpenedCard", "lastSeenCards"]),
    isLastSeenNotEmpty: function() {
      return this.lastSeenCards.length > 0;
    }
  },
  data: function() {
    return {
      isChatOpened: false
    };
  },
  components: {
    Chat,
    SideItemList,
    AboutCard
  },
  created: function() {
    refreshItem(this.$route.params.id);
  },
  updated: function() {},
  beforeDestroy: function() {
    this.setLastSeenCards();
  },
  methods: {
    toggleChat: function() {
      this.isChatOpened = !this.isChatOpened;
    },
    copyToClipboard: function() {
      navigator.clipboard
        .writeText(window.location)
        .then(() => {})
        .catch(err => {
          console.log("Something went wrong", err);
        });
    },
    ...mapMutations(["setLastSeenCards"])
  },
  watch: {
    $route(to) {
      this.setLastSeenCards();
      refreshItem(to.params.id);
    }
  }
};
</script>
