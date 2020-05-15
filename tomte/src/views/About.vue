<template>
  <div class="about">
    <div class="d-flex my-2">
      <AboutCard :navigateToChat="this.navigateToChat"></AboutCard>
      <SideItemList
        :headerText="this.headerText"
        :onCardClick="this.navigateToCard"
        :cards="this.lastSeenCards"
        v-if="this.isLastSeenNotEmpty"
        max-width="100"
      ></SideItemList>
      <div></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.about {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
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
import SideItemList from "../components/sideItemList";
import AboutCard from "../components/AboutCard";
import navigationActions from "../router/navigationActions";

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
      headerText: "Senast sedd"
    };
  },
  components: {
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
    navigateToCard: function(card) {
      if (this.$route.params.id !== card.id)
        navigationActions.navigateToAbout(card.id);
    },
    navigateToChat: function() {
      console.log("TO CHAT!!!");
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
