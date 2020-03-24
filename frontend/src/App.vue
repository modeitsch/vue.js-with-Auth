<template>
  <v-app>
 <v-card
    color="grey lighten-4"
    flat
    tile>
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

    </v-toolbar>
  </v-card>    <v-content>
      <Messages />
    </v-content>
  </v-app>
</template>

<script>
import Messages from "./components/Messages";

export default {
  name: "App",

  components: {
    Messages
  },

  data: () => ({
    //
  })
};
</script>
