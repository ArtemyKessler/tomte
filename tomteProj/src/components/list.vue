<template>
  <v-container class="list-container">
  </v-container>
</template>

<style scoped>
  .list-container {
    background-color: aqua;
  }
</style>

<script>
  export default {
    name: 'SearchBar',

    data: () => ({
      searchVal: "aa"
    }),
  }
</script>
