<template>
  <v-container class="list-container mx-1 my-2">
    <p class="font-weight-bold">{{this.headerText}}</p>
    <div v-for="(card, index) in this.cards" :key="card.id">
      <SideListCard :card="card" :onCardClick="onCardClick" :isLast="index===lastCardIndex"></SideListCard>
    </div>
  </v-container>
</template>

<style scoped>
.list-container {
  display: flex;
  flex-direction: column;
  height: 85vh;
  width: 20vw;
  overflow-y: scroll;
  padding-top: 0px;
  padding-bottom: 0px;
}

::-webkit-scrollbar {
  width: 3px;
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
import SideListCard from "./SideListCard";
export default {
  name: "SideItemList",
  data: () => ({}),
  props: {
    cards: Array,
    headerText: String,
    onCardClick: Function
  },
  computed: {
    lastCardIndex: function() {
      return this.cards.length - 1 || 0;
    }
  },
  components: {
    SideListCard
  },
  methods: {
    copyLink: function(card) {
      navigator.clipboard
        .writeText(card.id)
        .then(() => {})
        .catch(err => {
          console.log("Something went wrong", err);
        });
    }
  }
};
</script>
