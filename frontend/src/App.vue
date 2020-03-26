<template>
  <v-app>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar dense>
        <v-btn to="/" text>Messages</v-btn>
        <v-btn to="/NewMessage" text>New Message</v-btn>

        <v-spacer></v-spacer>
        <v-btn v-if="!$store.state.token" to="register" text>Register</v-btn>
        <v-btn v-if="!$store.state.token" to='login'  text>Login</v-btn>
        <v-btn v-if="$store.state.token" @click="$store.commit('logout')" text>Logout</v-btn>

      </v-toolbar>
    </v-card>
    <v-content>
      <br />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
