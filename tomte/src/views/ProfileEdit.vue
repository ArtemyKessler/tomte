<template>
  <v-container class="profileContainer mx-auto">
    <ProfileInputs :userState="this.userState" :updateProfile="updateProfile"></ProfileInputs>
  </v-container>
</template>

<style lang="css" scoped>
.profileContainer {
  display: flex;
  justify-content: center;
}
</style>

<script>
import { mapState } from "vuex";
import ProfileInputs from "../components/ProfileInputs";
import { updateProfile } from "../data/mockupRequests";

export default {
  name: "Profile",
  computed: {
    ...mapState(["UserModule"]),
    userState: function() {
      return this.UserModule;
    }
  },
  data: function() {
    return {};
  },
  components: {
    ProfileInputs
  },
  mounted: function() {},
  methods: {
    updateProfile: function() {
      updateProfile();
    }
  },
  watch: {}
};
</script>
