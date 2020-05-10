<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Ändra Lösenord formulär</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Aktiveringskod"
                    name="kod"
                    prepend-icon="person"
                    type="text"
                    v-model="code"
                  />
                  <v-text-field
                    id="password"
                    label="Lösenord"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                  />
                  <v-text-field
                    id="confirm-password"
                    label="Lösenord återuppspelning"
                    name="confirm-password"
                    prepend-icon="lock"
                    type="password"
                    v-model="confirmPassword"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn v-on:click="changePassword" color="primary">Ändra lösenord</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import navigationActions from "../router/navigationActions";
import { changePassword } from "../data/mockupRequests";
export default {
  props: {},
  data: () => ({
    code: "",
    password: "",
    confirmPassword: ""
  }),
  computed: {
    changePasswordData: function() {
      return {
        code: this.code,
        password: this.password,
        confirmPassword: this.confirmPassword
      };
    }
  },
  methods: {
    changePassword: function() {
      const isChange = changePassword(this.changePasswordData);
      if (isChange) {
        navigationActions.navigateToLogin();
      } else {
        alert("Fel kod eller lösenord");
      }
    }
  }
};
</script>
