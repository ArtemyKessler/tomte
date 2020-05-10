<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Skicka e-post formulär</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="E-mail"
                    name="login"
                    prepend-icon="person"
                    type="email"
                    v-model="email"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn v-on:click="sentEmail" color="primary">Skicka e-post</v-btn>
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
import { sentForgotPasswordEmail } from "../data/mockupRequests";
export default {
  props: {},
  data: () => ({
    email: ""
  }),
  methods: {
    sentEmail: function() {
      const isEmailSent = sentForgotPasswordEmail(this.email);
      if (isEmailSent) navigationActions.navigateToSetNewPassword();
    }
  }
};
</script>
