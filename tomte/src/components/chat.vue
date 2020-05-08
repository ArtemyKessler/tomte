<template>
  <v-container class="chat-container my-2" fluid>
    <div class="messages"></div>
    <v-textarea auto-grow autocomplete rows="3" clearable></v-textarea>
  </v-container>
</template>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 10vw;
  height: 80vh;
  background: slategrey;
}
.messages {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: royalblue;
}
</style>

<script>
export default {
  name: "Filters",
  data: () => ({
    searchVal: "",
    categorySelect: [],
    categoryItems: ["Utrustning", "Möblerna", "Hushållsvaror", "Hobby"],
    regionSelect: [],
    regionItems: ["Stockholm", "Uppsala", "Örebro", "Östergötland"],
    tagSelect: []
  }),
  computed: {},
  methods: {
    onSearchPress: () => {
      alert("жопа");
    }
  }
};
</script>
