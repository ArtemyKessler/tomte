<template>
  <v-container class="list-container" fluid>
    <v-row dense>
      <v-col v-for="card in this.cards" :key="card.id" :cols="card.flex">
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
    height: 90vh;
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
  import { mapState } from "vuex";
  import navigationActions from "../router/navigationActions";
  export default {
    name: "itemList",
    data: () => ({}),
    computed: {
      ...mapState(["cards"]),
    },
    methods: {
      onCardClick: function(card) {
        navigationActions.navigateToAbout(card.id);
      },
    },
  };
</script>
