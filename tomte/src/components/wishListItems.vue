<template>
  <v-container class="list-container" fluid>
    <v-layout class="mt-2" row wrap :justify-space-between="true">
      <WishListCard
        v-for="card in this.wishListFilters"
        :card="card"
        :key="card.id"
        :onCardClick="pickFilterToChange"
        :isPicked="card.id === pickedId"
      ></WishListCard>
    </v-layout>
  </v-container>
</template>

<style scoped>
.list-container {
  height: 90vh;
  width: 70vw;
  overflow-y: scroll;
}

.chipGroup {
  margin-left: 1vw;
}

.itemTitle {
  mix-blend-mode: difference;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  box-shadow: inset 0 0 5px grey;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

<script>
import { mapState } from "vuex";
import WishListCard from "./WishListCard";
export default {
  name: "itemList",
  props: {
    pickFilterToChange: Function,
    pickedId: String
  },
  data: () => ({
    pickedFilter: undefined
  }),
  computed: {
    ...mapState(["wishListFilters"])
  },
  components: {
    WishListCard
  },
  methods: {}
};
</script>
