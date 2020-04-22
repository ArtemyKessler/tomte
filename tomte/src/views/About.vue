<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-img
      :src="itemCard.src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    />
  </div>
</template>

<style lang="sass" scoped></style>

<script>
  export default {
    name: "About",
    props: ["card"],
    data: function() {
      return {
        itemCard: this.card,
      };
    },
    components: {
      // Filters,
      // ItemList
    },
    created: function() {
      console.log("ПРОПСЫ" + this.$route.params);
    },
  };
</script>
