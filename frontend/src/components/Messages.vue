<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Messages</v-toolbar-title>
      </v-toolbar>

      <v-list>
        <v-list-item  :key='index' v-for="(message, index) in $store.state.messages" :to="'message/' + index">
          <v-list-item-content>
            <v-list-item-title v-text="message.text"></v-list-item-title>
            <v-list-item-subtitle v-text="message.user"></v-list-item-subtitle>

          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
export default {
   created() {
    this.$store.dispatch('getMessages')
  }
};
</script>

<style>
</style>