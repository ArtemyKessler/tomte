<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Registreringsformulär</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="E-mail"
                    name="email"
                    prepend-icon="mail"
                    type="text"
                    v-model="email"
                  />
                  <v-text-field
                    label="Inloggning"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    v-model="login"
                  />
                  <v-text-field
                    label="Regionen"
                    name="login"
                    prepend-icon="map"
                    type="text"
                    v-model="region"
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
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="confirmPassword"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn v-on:click="onDataEnter" color="primary">Login</v-btn>
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
import { register } from "../data/mockupRequests";
export default {
  props: {},
  data: () => ({
    email: "",
    login: "",
    region: "",
    password: "",
    confirmPassword: ""
  }),
  computed: {
    registerData: function() {
      return {
        email: this.email,
        login: this.login,
        region: this.region,
        password: this.password,
        confirmPassword: this.confirmPassword
      };
    }
  },
  methods: {
    onDataEnter: function() {
      const isLogged = register(this.registerData);
      if (isLogged) navigationActions.navigateToHome();
      else {
        alert("Fel användarnamn eller lösenord");
      }
    }
  }
};
</script>
