<template>
  <v-container>
    <v-text-field class="search-field" v-model="searchVal"></v-text-field>
  </v-container>
</template>

<style scoped>
  .search-field {
    margin-left: 5vw;
    width: 50vw;
  }
</style>

<script>
  export default {
    name: "SearchBar",
    props: {
      msg: String,
    },
    data: function() {
      return {
        searchVal: "",
      };
    },
  };
</script>
