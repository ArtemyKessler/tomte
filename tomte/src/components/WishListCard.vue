<template>
  <v-flex xs12 md4 class="mb-5 d-inline-block px-1">
    <v-card
      v-bind:class="{blue:isPicked}"
      class="lighten-4"
      style="cursor: pointer"
      elevation="2"
      v-on:click="onCardClick(card)"
    >
      <v-card-subtitle class="pb-0">Kategori: {{ card.category }}</v-card-subtitle>
      <v-card-text class="text--primary">
        <div>Staden: {{ card.region }}</div>
      </v-card-text>
      <v-chip-group column class="chipGroup">
        <v-chip v-for="tag in card.tags" :key="tag">
          {{
          tag
          }}
        </v-chip>
      </v-chip-group>
      <v-card-actions>
        <v-card-title v-text="card.title"></v-card-title>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<style scoped>
.chipGroup {
  margin-left: 1vw;
}
</style>

<script>
export default {
  name: "WishListCard",
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
