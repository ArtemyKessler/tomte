<template>
  <div class="wishlist-container">
    <Filters
      :filters="this.filtersToEdit"
      :applyFilters="this.updateFilter"
      isStringSearch
      class="filters"
    />
    <WishListItems :pickFilterToChange="this.pickFilterToChange" class="wishList" />
  </div>
</template> 

<style lang="scss" scoped>
.wishlist-container {
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
.wishList {
  grid-area: list;
}
</style>

<script>
import Filters from "../components/filters";
import WishListItems from "../components/wishListItems";
import {
  updateFilterInWishList,
  addFilterToWishList
} from "../data/mockupRequests";
export default {
  name: "WishList",
  components: {
    Filters,
    WishListItems
  },
  data: () => ({
    filtersToEdit: {}
  }),
  methods: {
    pickFilterToChange: function(data) {
      this.filtersToEdit = data;
    },
    updateFilter: function(data) {
      if (data.id) {
        updateFilterInWishList(data);
      } else {
        addFilterToWishList(data);
      }
    }
  }
};
</script>