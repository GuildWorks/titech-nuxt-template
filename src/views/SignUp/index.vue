<template>
  <div>
      <v-content>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <h3>SignUp</h3>
              <v-text-field v-model="email" placeholder="email">
              </v-text-field>
              <v-text-field type="password" v-model="password" placeholder="password">
              </v-text-field>
              <v-btn v-on:click="signUp">SignUp</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
      return {
        email: null,
        password: null
      }
  },
  methods: {
    signUp: function () {

    }
  }
};
</script>
