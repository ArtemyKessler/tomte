<template>
  <v-container>
    <!-- <v-input
      v-model="searchVal"
    ></v-input> -->
    <v-text-field
      v-model="searchVal"
    ></v-text-field>
  </v-container>
</template>

<script>
  export default {
    name: 'SearchBar',

    data: () => ({
      searchVal: ""
    }),
  }
</script>
