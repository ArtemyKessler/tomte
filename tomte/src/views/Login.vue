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
                    v-on:keyup.enter="onDataEnter"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions class="actions">
                <v-btn v-on:click="onDataEnter" color="primary" class="loginBtn">Logga in</v-btn>
                <div class="d-flex btnGroup">
                  <v-btn v-on:click="goToRegister" color="primary">Registrera</v-btn>
                  <v-btn v-on:click="goToForgetPassword" color="primary">Påminn pass</v-btn>
                </div>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<style scoped>
.actions {
  flex-direction: column;
  justify-content: space-around;
}

.loginBtn {
  align-self: flex-end;
}

.btnGroup {
  margin-top: 0.5em;
  width: 100%;
  justify-content: space-between;
}
</style>

<script>
import navigationActions from "../router/navigationActions";
import { login } from "../data/mockupRequests";
export default {
  props: {},
  data: () => ({
    login: "hshs@sksk.bi",
    password: "12121212121212"
  }),
  computed: {
    loginData: function() {
      return {
        login: this.login,
        password: this.password
      };
    }
  },
  methods: {
    onDataEnter: function() {
      const isLogged = login(this.loginData);
      if (isLogged) navigationActions.navigateToHome();
      else {
        alert("Fel användarnamn eller lösenord");
      }
    },
    goToRegister: function() {
      navigationActions.navigateToRegister();
    },
    goToForgetPassword: function() {
      navigationActions.navigateToForgetPassword();
    }
  }
};
</script>
