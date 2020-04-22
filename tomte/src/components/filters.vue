<template>
  <v-container class="filter-container">
    <v-sheet elavation="10">
      <v-combobox v-model="categorySelect" :items="categoryItems" label="Kategori" multiple chips></v-combobox>
      <v-combobox v-model="regionSelect" :items="regionItems" label="Län" multiple chips></v-combobox>
      <v-combobox v-model="tagSelect" label="Tagg" multiple chips></v-combobox>
      <v-btn @click="onSearchPress">HITTA ERBJUDANDEN</v-btn>
    </v-sheet>
  </v-container>
</template>

<style scoped>
.filter-container {
  /* background-color:coral; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>

<script>
export default {
  name: "Filters",
  data: () => ({
    searchVal: "",
    categorySelect: [],
    categoryItems: ["Utrustning", "Möblerna", "Hushållsvaror", "Hobby"],
    regionSelect: [],
    regionItems: ["Stockholm", "Uppsala", "Örebro", "Östergötland"],
    tagSelect: []
  }),
  computed: {},
  methods: {
    onSearchPress: () => {
      alert("жопа");
    }
  }
};
</script>
