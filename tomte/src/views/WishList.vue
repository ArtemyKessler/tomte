<template>
  <div
    class="wishlist-container"
    :class="{smallScreenPosition: this.$vuetify.breakpoint.smAndDown}"
  >
    <Filters
      v-if="!this.isDrawerOpen"
      :filters="this.filtersToEdit"
      :applyFilters="this.updateFilter"
      isStringSearch
    />
    <WishListItems :pickFilterToChange="this.pickFilterToChange" :pickedId="this.filtersToEdit.id" />
  </div>
</template> 

<style lang="scss" scoped>
.wishlist-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}

.smallScreenPosition {
  flex-direction: column;
}
</style>

<script>
import { mapState } from "vuex";
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
  computed: {
    ...mapState(["isDrawerOpen"])
  },
  methods: {
    pickFilterToChange: function(data) {
      if (this.filtersToEdit.id === data.id) {
        this.filtersToEdit = {};
      } else {
        this.filtersToEdit = data;
      }
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