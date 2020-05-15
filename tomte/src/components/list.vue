<template>
  <v-container v-on:scroll="onScroll" ref="listContainer" class="list-container" fluid>
    <v-layout class="mt-8" row wrap :justify-space-between="true">
      <ListCard
        v-for="card in this.cards"
        :key="card.id"
        :card="card"
        :onCardClick="onCardClick"
        :isPicked="card.id === pickedId"
      ></ListCard>
    </v-layout>
  </v-container>
</template>

<style scoped>
.list-container {
  max-height: 90vh;
  width: 70vw;
  overflow-y: scroll;
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
import { mapState, mapMutations } from "vuex";
import ListCard from "./ListCard";
export default {
  name: "itemList",
  props: {
    onEndReached: Function,
    cards: Array,
    onCardClick: Function,
    pickedId: String
  },
  data: () => ({
    lastScroll: 0
  }),
  computed: {
    ...mapState(["lastScrollPosition"])
  },
  components: {
    ListCard
  },
  methods: {
    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      this.lastScroll = scrollTop;
      if (scrollTop + clientHeight >= scrollHeight) {
        this.onEndReached();
      }
    },
    ...mapMutations(["setLastScrollPosition"])
  },
  mounted: function() {
    this.$refs.listContainer.scrollTop = this.lastScrollPosition;
    this.lastScroll = this.lastScrollPosition;
  },
  beforeDestroy: function() {
    this.setLastScrollPosition(this.lastScroll);
  },
  watch: {
    cards: function(newVal, oldVal) {
      if (newVal.length <= oldVal.length) {
        this.$refs.listContainer.scrollTop = 0;
      }
    }
  }
};
</script>
