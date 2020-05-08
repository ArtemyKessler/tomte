<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Inloggningsformulär</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Inloggning"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    v-model="login"
                  />

                  <v-text-field
                    id="password"
                    label="Lösenord"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
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
  import { login } from "../data/mockupRequests";
  export default {
    props: {
      source: String,
    },
    data: () => ({
      login: "hshs@sksk.bi",
      password: "12121212121212",
    }),
    computed: {
      loginData: function() {
        return {
          login: this.login,
          password: this.password,
        };
      },
    },
    methods: {
      onDataEnter: function() {
        const isLogged = login(this.loginData);
        if (isLogged) navigationActions.navigateToHome();
        else {
          alert("Fel användarnamn eller lösenord");
        }
      },
    },
  };
</script>
