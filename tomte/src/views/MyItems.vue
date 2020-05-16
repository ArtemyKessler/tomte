<template>
  <div class="myItems" :class="{smallScreenPosition: this.$vuetify.breakpoint.smAndDown}">
    <Filters
      v-if="!this.isDrawerOpen"
      :filters="this.filtersToEdit"
      :applyFilters="saveChangeToItem"
      isStringSearch
    />
    <ItemList
      v-if="this.isMyOffersNotEmpty"
      :cards="this.myOffers"
      :onCardClick="this.pickCard"
      :onEndReached="loadMoreItemsToMyItemsList"
      :pickedId="this.filtersToEdit.id"
    />
  </div>
</template>

<style scoped>
.myItems {
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
import Filters from "../components/filters";
import ItemList from "../components/list";
import {
  updateOfferInMyItems,
  addOfferToMyItems
} from "../data/mockupRequests";
import { mapState } from "vuex";
export default {
  name: "myItems",
  components: {
    Filters,
    ItemList
  },
  data: () => ({
    filtersToEdit: {}
  }),
  computed: {
    ...mapState(["myOffers", "isDrawerOpen"]),
    isMyOffersNotEmpty: function() {
      return this.myOffers.length > 0;
    }
  },
  methods: {
    saveChangeToItem: function(data) {
      // WRITE NORMAL LOGIC
      data.src = this.filtersToEdit.src;
      if (data.id) {
        updateOfferInMyItems(data);
      } else {
        addOfferToMyItems(data);
      }
    },
    loadMoreItemsToMyItemsList: function() {
      //   loadMoreItems();
    },
    pickCard: function(data) {
      if (this.filtersToEdit.id === data.id) {
        this.filtersToEdit = {};
      } else {
        this.filtersToEdit = data;
      }
    }
  }
};
</script>
