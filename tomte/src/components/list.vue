<template>
  <v-container v-on:scroll="onScroll" ref="listContainer" class="list-container" fluid>
    <v-row dense>
      <v-col v-for="card in this.cards" :key="card.id" :cols="3">
        <v-card v-on:click="onCardClick(card)">
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
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
import navigationActions from "../router/navigationActions";
export default {
  name: "itemList",
  props: {
    onEndReached: Function
  },
  data: () => ({
    lastScroll: 0
  }),
  computed: {
    ...mapState(["cards", "lastScrollPosition"])
  },
  methods: {
    onCardClick: function(card) {
      navigationActions.navigateToAbout(card.id);
    },
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
