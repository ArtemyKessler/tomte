<template>
  <div class="home">
    <SearchBar class="search" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<style scoped>
  .home {
    grid-template-areas:    
      "search search"
      "filters list";
  }

  .search {
    grid-area: "search";
  }

  .filters {
    grid-area: "filters";
  }

  .itemList {
    grid-area: "list";
  }

</style>

<script>
import SearchBar from '../components/searchBar';

export default {
  name: 'Home',
  components: {
    SearchBar
  }
}
</script>
