<template>
  <v-container class="filter-container">
    <v-sheet elavation="10">
      <v-text-field v-if="this.isStringSearch" v-model="searchString" label="Sökfält" clearable></v-text-field>
      <v-combobox
        v-model="categorySelect"
        :items="categoryItems"
        label="Kategori"
        clearable
        small-chips
      ></v-combobox>
      <v-combobox v-model="regionSelect" :items="regionItems" label="Län" clearable small-chips></v-combobox>
      <v-combobox v-model="tagSelect" label="Tagg" clearable multiple small-chips></v-combobox>
      <v-btn @click="onSearchPress">HITTA ERBJUDANDEN</v-btn>
    </v-sheet>
  </v-container>
</template>

<style scoped>
.filter-container {
  max-width: 18vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>

<script>
const ALL = "all";
import { isArrayAndNotEnempty } from "../utils/arrayUtils";
import { categories, regions } from "../data/mockupConstants";

export default {
  name: "Filters",
  props: {
    applyFilters: Function,
    filters: Object,
    isStringSearch: Boolean
  },
  data: () => ({
    searchString: "",
    categorySelect: undefined,
    categoryItems: categories,
    regionSelect: undefined,
    regionItems: regions,
    tagSelect: [],
    id: undefined
  }),
  computed: {},
  watch: {
    filters: function(newVal) {
      this.searchString = newVal.title;
      this.categorySelect = newVal.category;
      this.regionSelect = newVal.region;
      this.tagSelect = newVal.tags;
      this.id = newVal.id;
    }
  },
  methods: {
    onSearchPress: function() {
      const filters = {
        title: this.searchString,
        category: this.categorySelect || ALL,
        region: this.regionSelect || ALL,
        tags: isArrayAndNotEnempty(this.tagSelect) ? this.tagSelect : [ALL],
        id: this.id
      };
      this.applyFilters(filters);
    }
  }
};
</script>
