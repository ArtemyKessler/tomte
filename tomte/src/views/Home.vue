<template>
  <div class="home" :class="{smallScreenPosition: this.$vuetify.breakpoint.smAndDown}">
    <Filters v-if="!this.isDrawerOpen" :applyFilters="searchWithFilters" />
    <ItemList
      :cards="this.cards"
      :onCardClick="this.onCardClick"
      :onEndReached="loadMoreItemsToMainList"
    />
  </div>
</template>

<style scoped>
.home {
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
import navigationActions from "../router/navigationActions";
import { loadMoreItems } from "../data/mockupRequests";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Filters,
    ItemList
  },
  computed: {
    ...mapState(["cards", "isDrawerOpen"])
  },
  methods: {
    searchWithFilters: function(filters) {
      alert("жепка");
      console.log("filters", filters);
    },
    loadMoreItemsToMainList: function() {
      loadMoreItems();
    },
    onCardClick: function(card) {
      navigationActions.navigateToAbout(card.id);
    }
  }
};
</script>
