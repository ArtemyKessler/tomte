<template>
  <v-container class="profileContainer mx-auto">
    <ProfileInputs :userState="this.userState"></ProfileInputs>
    <SideItemList v-if="this.isMyOffersNotEmpty" :cards="this.myOffers"></SideItemList>
  </v-container>
</template>

<style lang="css" scoped>
.profileContainer {
  display: flex;
  flex-direction: column;
}
</style>

<script>
import { mapState } from "vuex";
import ProfileInputs from "../components/ProfileInputs";
import SideItemList from "../components/sideItemList";

export default {
  name: "Profile",
  computed: {
    ...mapState(["UserModule"]),
    userState: function() {
      return this.UserModule;
    },
    myOffers: function() {
      return this.userState.myOffers;
    },
    isMyOffersNotEmpty: function() {
      return this.myOffers.length > 0;
    }
  },
  data: function() {
    return {};
  },
  components: {
    ProfileInputs,
    SideItemList
  },
  mounted: function() {},
  methods: {},
  watch: {}
};
</script>
