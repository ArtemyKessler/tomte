<template>
  <div class="home">
    <Filters :applyFilters="searchWithFilters" class="filters" />
    <ItemList :onEndReached="loadMoreItemsToMainList" class="itemList" />
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "filters list";
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 10px;
}
.filters {
  grid-area: filters;
}
.itemList {
  grid-area: list;
}
</style>

<script>
import Filters from "../components/filters";
import ItemList from "../components/list";
import { loadMoreItems } from "../data/mockupRequests";
export default {
  name: "Home",
  components: {
    Filters,
    ItemList
  },
  methods: {
    searchWithFilters: function(filters) {
      alert("жепка");
      console.log("filters", filters);
    },
    loadMoreItemsToMainList: function() {
      loadMoreItems();
    }
  }
};
</script>
