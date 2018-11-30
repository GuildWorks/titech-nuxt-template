<template>
  <div>
      <v-content>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <h3>SignIn</h3>
              <v-text-field v-model="email" placeholder="email">
              </v-text-field>
              <v-text-field type="password" v-model="password" placeholder="password">
              </v-text-field>
              <v-btn v-on:click="signin">SignIn</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
      return {
        email: null,
        password: null
      }
  },
  methods: {
    signin: function () {
      
    }
  }
};
</script>
