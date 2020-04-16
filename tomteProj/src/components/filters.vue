<template>
  <v-container class="filter-container">
    <v-sheet
      elavation="10"
    >
      <v-text-field
      label="Kategori"
      outlined
      clearable
    ></v-text-field>
    <v-text-field
      label="Län"
      outlined
      clearable
    ></v-text-field>
    <v-text-field
      label="Tagg"
      outlined
      clearable
    >
    </v-text-field>
    <v-chip-group
      multiple
      active-class="primary--text"
    >
      <v-chip v-for="tag in tags" :key="tag">
        {{ tag }}
      </v-chip>
    </v-chip-group>
    <v-btn>
      HITTA ERBJUDANDEN
    </v-btn>
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
    name: 'SearchBar',

    data: () => ({
      searchVal: "",
      category: "",
      tags: ["tech", "phone"]
    }),
  }
</script>
