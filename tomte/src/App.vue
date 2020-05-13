<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app>
          <v-list dense>
            <v-list-item link @click="navigateToHome">
              <v-list-item-action>
                <v-icon>search</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Sök</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="navigateToWishList">
              <v-list-item-action>
                <v-icon>list</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Önskelista</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="navigateToProfile">
              <v-list-item-action>
                <v-icon>mdi-account</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Profil</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="navigateToMyList">
              <v-list-item-action>
                <v-icon>mdi-briefcase</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Mina erbjudanden</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="navigateToLogin">
              <v-list-item-action>
                <v-icon>mdi-exit-run</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Utgång</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar v-if="this.isInsideApp" app color="primary" dark>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <div class="d-flex align-center">
            <v-toolbar-title>Tomte</v-toolbar-title>
            <v-divider class="mx-4" vertical></v-divider>
            <span class="subheading limited">{{ this.pageHeaderText }}</span>
          </div>
          <SearchBar v-if="this.isSearchBar" v-model="searchValue" msg="sasat" class="search" />
        </v-app-bar>

        <v-content>
          <router-view />
        </v-content>
      </v-app>
    </v-app>
  </div>
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

.limited {
  width: 10em;
}
</style>

<script>
import SearchBar from "./components/searchBar";
import { mapState } from "vuex";
import navigationActions from "./router/navigationActions";
import { isInsideTheApp } from "./router/RoutesAlias";

export default {
  name: "App",

  components: {
    SearchBar
  },

  data: () => ({
    searchValue: "",
    drawer: null
  }),
  computed: {
    ...mapState(["pageHeaderText", "isSearchBar"]),
    isInsideApp: function() {
      const isInside = isInsideTheApp(this.$route.path);
      return isInside;
    }
  },
  created: function() {
    this.drawer = false;
  },
  methods: {
    navigateToHome: function() {
      navigationActions.navigateToHome();
    },
    navigateToWishList: function() {
      navigationActions.navigateToWishList();
    },
    navigateToProfile: function() {
      navigationActions.navigateToProfile();
    },
    navigateToMyList: function() {
      navigationActions.navigateToMyItems();
    },
    navigateToLogin: function() {
      this.drawer = false;
      navigationActions.navigateToLogin();
    }
  }
};
</script>
