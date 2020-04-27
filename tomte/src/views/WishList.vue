<template>
  <div class="wishlist-container">
    <Filters class="filters" />
    <WishListItems class="wishList" />
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
export default {
  name: "WishList",
  components: {
    Filters,
    WishListItems
  }
};
</script>