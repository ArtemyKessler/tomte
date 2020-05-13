<template>
  <div class="home">
    <Filters
      :filters="this.filtersToEdit"
      :applyFilters="saveChangeToItem"
      isStringSearch
      class="filters"
    />
    <ItemList
      v-if="this.isMyOffersNotEmpty"
      :cards="this.myOffers"
      :onCardClick="this.pickCard"
      :onEndReached="loadMoreItemsToMainList"
      :pickedId="this.filtersToEdit.id"
      class="itemList"
    />
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
    ...mapState(["myOffers"]),
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
    loadMoreItemsToMainList: function() {
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
