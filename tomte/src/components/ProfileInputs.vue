<template>
  <v-card class="mx-5 my-2" max-width="400">
    <v-img class="white--text align-end" height="30vh" :src="this.userState.userPic"></v-img>
    <div class="my-3">
      <v-file-input
        class="mx-4"
        v-model="file"
        :rules="rules"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an avatar"
        prepend-icon="mdi-camera"
        label="Avatar"
      ></v-file-input>
      <v-text-field class="mx-4" v-model="this.login" label="Inloggning" clearable></v-text-field>
      <v-text-field class="mx-4" v-model="this.region" label="Område" clearable></v-text-field>
      <v-text-field class="mx-4" label="Lösenord" clearable></v-text-field>
      <v-text-field class="mx-4" label="Lösenord återuppspelning" clearable></v-text-field>
    </div>
    <v-card-actions>
      <v-btn @click="this.onUdateProfileClick" color="orange" text>Uppdatera Profilen</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>
.chipGroup {
  margin-left: 1vw;
}

.itemTitle {
  mix-blend-mode: difference;
}
</style>

<script>
export default {
  name: "ProfileInputs",
  props: {
    userState: Object,
    updateProfile: Function
  },
  data: function() {
    return {
      rules: [
        value =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!"
      ],
      file: undefined,
      login: this.userState.login,
      region: this.userState.region,
      password: "",
      confirmConfirm: ""
    };
  },
  computed: {
    userData: function() {
      return {
        login: this.login
      };
    }
  },
  methods: {
    onUdateProfileClick: function() {
      this.updateProfile();
    }
  },
  mounted: function() {
    console.log("USER STATE", this.userState.login);
  }
};
</script>
