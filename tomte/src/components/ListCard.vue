<template>
  <v-flex xs12 md4 class="mb-10 d-inline-block px-1">
    <v-card
      v-bind:class="{blue: isPicked}"
      class="lighten-4"
      style="cursor: pointer"
      elevation="2"
      v-on:click="onCardClick(card)"
    >
      <v-card
        class="d-flex justify-center mx-3"
        color="grey lighten-1"
        elevation="4"
        style="bottom: 1rem; z-index: +1; margin-bottom: -1rem"
        height="20rem"
      >
        <v-img :src="card.src" />
      </v-card>
      <v-card-subtitle class="text-center">Kategori: {{ card.category }}</v-card-subtitle>
      <v-card-text class="text--primary">
        <div>Staden: {{ card.region }}</div>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<style scoped>
</style>

<script>
export default {
  name: "listCard",
  props: {
    card: Object,
    onCardClick: Function,
    isPicked: Boolean
  },
  data: () => ({}),
  computed: {},
  methods: {},
  mounted: function() {},
  beforeDestroy: function() {},
  watch: {}
};
</script>
