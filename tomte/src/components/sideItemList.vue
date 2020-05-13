<template>
  <v-container class="list-container mx-1 my-2">
    <p class="font-weight-bold">{{this.headerText}}</p>
    <div v-for="(card, index) in this.cards" :key="card.id">
      <v-card
        class="lastSeenCard"
        v-on:click="onCardClick(card)"
        v-bind:class="{noBottomMargin: index===cardsLength}"
      >
        <v-img
          :src="card.src"
          class="white--text"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="20vh"
        >
          <v-card-title v-text="card.title"></v-card-title>
        </v-img>
        <v-card-actions class="card-footer">
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-bookmark</v-icon>
          </v-btn>
          <v-btn v-on:click="copyLink(card)" icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<style scoped>
.list-container {
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 20vw;
  overflow-y: scroll;
  padding-top: 0px;
}

.lastSeenCard {
  margin-bottom: 10px;
}

.noBottomMargin {
  margin-bottom: 0px;
}

.card-footer {
  height: 4vh;
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
export default {
  name: "SideItemList",
  data: () => ({}),
  props: {
    cards: Array,
    headerText: String,
    onCardClick: Function
  },
  computed: {
    cardsLength: function() {
      return this.cards.length - 1 || 0;
    }
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
