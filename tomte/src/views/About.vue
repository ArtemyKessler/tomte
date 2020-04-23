<template>
  <div class="about">
    <h1 class="mx-2 my-2">Om gåvan</h1>
    <div class="d-flex justify-between">
      <v-card v-if="this.lastOpenedCard" class="mx-5 my-2" max-width="400">
        <v-img
          class="white--text align-end"
          height="50vh"
          :src="this.lastOpenedCard.src"
        >
          <v-card-title
            class="itemTitle"
            v-text="this.lastOpenedCard.title"
          ></v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0"
          >Kategori: {{ this.lastOpenedCard.category }}</v-card-subtitle
        >
        <v-card-text class="text--primary">
          <div>Staden: {{ this.lastOpenedCard.place }}</div>
        </v-card-text>
        <v-chip-group column class="chipGroup">
          <v-chip v-for="tag in this.lastOpenedCard.tags" :key="tag">{{
            tag
          }}</v-chip>
        </v-chip-group>
        <v-card-actions>
          <v-btn color="orange" text>Börja Chatta</v-btn>
          <v-btn v-on:click="copyToClipboard" color="orange" text
            >Dela Länk</v-btn
          >
        </v-card-actions>
      </v-card>
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
  import { mapState } from "vuex";
  import { refreshItem } from "../data/mockupRequests";

  export default {
    name: "About",
    computed: {
      ...mapState(["lastOpenedCard"]),
    },
    data: function() {
      return {
        // itemCard: this.lastOpenedCard
      };
    },
    components: {},
    created: function() {
      refreshItem(this.$route.params.id);
    },
    updated: function() {},
    methods: {
      copyToClipboard: function() {
        navigator.clipboard
          .writeText(window.location)
          .then(() => {})
          .catch((err) => {
            console.log("Something went wrong", err);
          });
      },
    },
  };
</script>
