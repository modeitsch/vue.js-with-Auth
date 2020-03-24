<template>
  <div>
    <h4 class="display-1">Messages</h4>
    <v-list>
      <v-list-item v-for="(message, index) in messages" :key="index" @click='click' >
        <v-list-item-content>
          <v-list-item-title v-text="message"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      messages: []
    };
  },
  methods: {
    click: function() {
        console.log("hello")
    }
    
  },
  async created() {
    this.messages = (await axios.get('http://localhost:3000/messeges')).data;
  },
};
</script>

<style>
</style>