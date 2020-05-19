<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer disable-resize-watcher v-model="drawer" app>
          <v-list dense>
            <v-list-item
              v-for="item in this.drawerMenuItems"
              :key="item.text"
              link
              @click="item.onClick"
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar
          v-if="this.isInsideApp"
          app
          color="primary"
          dark
          class="d-flex align-center"
        >
          <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
          <div class="d-flex align-center">
            <v-toolbar-title>Tomte</v-toolbar-title>
            <v-divider class="mx-4" vertical></v-divider>
            <span class="subheading limited">{{ this.pageHeaderText }}</span>
          </div>
          <v-text-field
            v-if="this.isSearchBar"
            class="search mx-auto align-center"
            v-model="searchValue"
            hide-details
            clearable
            dense
            filled
          ></v-text-field>
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
    width: 50vw;
  }

  .limited {
    width: 10em;
  }
</style>

<script>
  import Vue from "vue";
  import { mapState, mapMutations } from "vuex";
  import navigationActions from "./router/navigationActions";
  import { isInsideTheApp } from "./router/RoutesAlias";
  import vueResource from "vue-resource";

  Vue.use(vueResource);

  export default {
    name: "App",

    components: {},

    data: function() {
      return {
        drawer: null,
        drawerMenuItems: [
          {
            onClick: this.navigateToHome,
            icon: "search",
            text: "Sök",
          },
          {
            onClick: this.navigateToWishList,
            icon: "list",
            text: "Önskelista",
          },
          {
            onClick: this.navigateToProfile,
            icon: "mdi-account",
            text: "Profil",
          },
          {
            onClick: this.navigateToMyList,
            icon: "mdi-briefcase",
            text: "Mina erbjudanden",
          },
          {
            onClick: this.navigateToChatList,
            icon: "mdi-forum-outline",
            text: "Сhattar",
          },
          {
            onClick: this.navigateToLogin,
            icon: "mdi-exit-run",
            text: "Utgång",
          },
        ],
      };
    },
    computed: {
      ...mapState(["pageHeaderText", "isSearchBar", "globalSearchString"]),
      isInsideApp: function() {
        const isInside = isInsideTheApp(this.$route.path);
        return isInside;
      },
      searchValue: {
        get() {
          return this.globalSearchString;
        },
        set(value) {
          this.setGlobalSearchString(value);
        },
      },
    },
    created: function() {
      this.drawer = false;
    },
    methods: {
      ...mapMutations(["setIsDrawerOpened", "setGlobalSearchString"]),
      toggleDrawer: function() {
        this.drawer = !this.drawer;
        this.setIsDrawerOpened(this.drawer);
      },
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
      navigateToChatList: function() {
        navigationActions.navigateToChatList();
      },
      navigateToLogin: function() {
        this.drawer = false;
        this.setIsDrawerOpened(this.drawer);
        navigationActions.navigateToLogin();
      },
    },
    watch: {
      drawer: function(newVal) {
        this.setIsDrawerOpened(newVal);
      },
    },
  };
</script>
