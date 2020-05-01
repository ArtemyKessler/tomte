<template>
  <v-container class="list-container mx-1 my-2">
    <div v-for="card in this.lastSeenCards" :key="card.id">
      <v-card class="lastSeenCard" v-on:click="onCardClick(card)">
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
import { mapState } from "vuex";
import navigationActions from "../router/navigationActions";
export default {
  name: "itemList",
  data: () => ({}),
  computed: {
    ...mapState(["lastSeenCards"])
  },
  methods: {
    onCardClick: function(card) {
      if (this.$route.params.id !== card.id)
        navigationActions.navigateToAbout(card.id);
    },
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
