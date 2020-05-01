<template>
  <v-container class="list-container" fluid>
    <v-row dense>
      <v-col v-for="card in this.wishListFilters" :key="card.id" :cols="3">
        <v-card
          v-on:click="onFilterCardClick(card)"
          class="lighten-4"
          v-bind:class="{blue : card.id === pickedFilter }"
        >
          <v-card-subtitle class="pb-0">Kategori: {{ card.category }}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>Staden: {{ card.region }}</div>
          </v-card-text>
          <v-chip-group column class="chipGroup">
            <v-chip v-for="tag in card.tags" :key="tag">
              {{
              tag
              }}
            </v-chip>
          </v-chip-group>
          <v-card-actions>
            <v-card-title v-text="card.title"></v-card-title>
            <v-spacer></v-spacer>
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
// import navigationActions from "../router/navigationActions";
export default {
  name: "itemList",
  props: {
    pickFilterToChange: Function
  },
  data: () => ({
    pickedFilter: undefined
  }),
  computed: {
    ...mapState(["wishListFilters"])
  },
  methods: {
    onFilterCardClick: function(card) {
      if (this.pickedFilter === card.id) {
        this.pickedFilter = undefined;
        this.pickFilterToChange({});
      } else {
        this.pickedFilter = card.id;
        this.pickFilterToChange(card);
      }
    }
  }
};
</script>
