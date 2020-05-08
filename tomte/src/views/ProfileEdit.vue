<template>
  <v-container class="profileContainer mx-auto">
    <ProfileInputs></ProfileInputs>
  </v-container>
</template>

<style lang="css" scoped>
  .profileContainer {
    display: flex;
    flex-direction: column;
  }
</style>

<script>
  import ProfileInputs from "../components/ProfileInputs";

  export default {
    name: "Profile",
    computed: {},
    data: function() {
      return {};
    },
    components: {
      ProfileInputs,
    },
    created: function() {},
    updated: function() {},
    beforeDestroy: function() {},
    methods: {},
    watch: {},
  };
</script>
