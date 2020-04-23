<template>
  <v-container>
    <v-text-field class="search-field mx-auto" v-model="searchVal" clearable dense filled></v-text-field>
  </v-container>
</template>

<style scoped>
.search-field {
  /* margin-top: 2vh; */
  width: 50vw;
}
</style>

<script>
export default {
  name: "SearchBar",
  props: {
    msg: String
  },
  data: function() {
    return {
      searchVal: ""
    };
  }
};
</script>
