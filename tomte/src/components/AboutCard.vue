<template>
  <v-card v-if="this.lastOpenedCard" class="mx-5 my-2 aboutCard" max-width="400">
    <v-img class="white--text align-end" height="50vh" :src="this.lastOpenedCard.src">
      <v-card-title class="itemTitle" v-text="this.lastOpenedCard.title"></v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0">Kategori: {{ this.lastOpenedCard.category }}</v-card-subtitle>
    <v-card-text class="text--primary">
      <div>Staden: {{ this.lastOpenedCard.region }}</div>
    </v-card-text>
    <v-chip-group column class="chipGroup">
      <v-chip v-for="tag in this.lastOpenedCard.tags" :key="tag">{{ tag }}</v-chip>
    </v-chip-group>
    <v-card-actions>
      <v-btn v-on:click="this.navigateToChat" color="orange" text>Börja Chatta</v-btn>
      <v-btn v-on:click="copyToClipboard" color="orange" text>Dela Länk</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>
.aboutCard {
  height: 85vh;
  width: 35vw;
}
.chipGroup {
  margin-left: 1vw;
}

.itemTitle {
  mix-blend-mode: difference;
}
</style>

<script>
import { mapState } from "vuex";

export default {
  name: "AboutCard",
  props: {
    navigateToChat: Function
  },
  computed: {
    ...mapState(["lastOpenedCard"])
  },
  data: function() {
    return {};
  },
  methods: {
    copyToClipboard: function() {
      navigator.clipboard
        .writeText(window.location)
        .then(() => {})
        .catch(err => {
          console.log("Something went wrong", err);
        });
    }
  }
};
</script>
