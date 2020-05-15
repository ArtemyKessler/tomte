<template>
  <v-card
    class="lastSeenCard"
    v-on:click="onCardClick(card)"
    v-bind:class="{noBottomMargin: isLast}"
  >
    <v-img
      :src="card.src"
      class="white--text"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="20vh"
    >
      <v-card-title v-text="card.title"></v-card-title>
    </v-img>
    <v-card-actions class="card-footer">
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
      <v-btn v-on:click="copyLink(card)" icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.noBottomMargin {
  margin-bottom: 4px;
}
</style>

<script>
export default {
  name: "sideListCard",
  props: {
    card: Object,
    onCardClick: Function,
    isLast: Boolean
  },
  data: () => ({}),
  computed: {},
  methods: {},
  mounted: function() {},
  beforeDestroy: function() {},
  watch: {}
};
</script>