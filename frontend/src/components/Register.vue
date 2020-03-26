<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-row>
            <v-col xs12 md4>
              <v-text-field v-model="userName" label="User Name" required></v-text-field>
            </v-col>
                      <v-col xs12 md4>
              <v-text-field v-model="password" label="Password" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn class="mr-4" @click="register">register</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    async register() {
      this.$store.dispatch("register", {userName: this.userName, password: this.password});
    }
  }
};
</script>