<template>
  <div class="home">
    <Filters class="filters" />
    <ItemList class="itemList" />
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    "search search"
    "filters list";
  grid-template-rows: 1fr 4fr;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 10px;
}
.search {
  grid-area: search;
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
export default {
  name: "Home",
  components: {
    Filters,
    ItemList
  }
};
</script>
