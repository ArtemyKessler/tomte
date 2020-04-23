<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-toolbar-title>Tomte</v-toolbar-title>
        <v-divider class="mx-4" vertical></v-divider>
        <span class="subheading">{{ this.pageHeaderText }}</span>
      </div>
      <SearchBar v-if="this.isSearchBar" msg="sasat" class="search" />

      <v-spacer></v-spacer>
      <v-toolbar-items id="nav" class="hidden-sm-and-down">
        <v-btn v-on:click="navigateToSearch" text>Sök</v-btn>

        <v-divider vertical></v-divider>

        <v-btn text>Önskelista</v-btn>

        <v-divider vertical></v-divider>

        <v-btn text>Profil</v-btn>

        <v-divider vertical></v-divider>

        <v-btn text>Chatt</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>
  #nav {
    a {
      font-weight: bold;
      color: whitesmoke;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .search {
    align-self: flex-start;
  }
</style>

<script>
  import SearchBar from "./components/searchBar";
  import { mapState } from "vuex";

  export default {
    name: "App",

    components: {
      SearchBar,
    },

    data: () => ({
      //
    }),
    computed: {
      ...mapState(["pageHeaderText", "isSearchBar"]),
    },
    methods: {
      navigateToSearch: function() {
        this.$router.push("/");
      },
      navigateToWishList: function() {
        this.$router.push("/wishList");
      },
      // ...mapMutations(["changePageHeaderText"])
    },
  };
</script>
