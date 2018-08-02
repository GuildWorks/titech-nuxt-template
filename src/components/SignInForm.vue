<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>ログイン</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field prepend-icon="mail" name="login" label="email" type="text" v-model="email" :rules="emailRules" required></v-text-field>
                <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password" :rules="passwordRules" required></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" :disabled="!valid" @click="submit">ログイン</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import api from "@/api";

const signInRoutine = params =>
  new Promise((resolve, reject) => {
    api.signIn
      .createData(params)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });

export default {
  name: "SignInForm",
  data() {
    return {
      email: "",
      password: "",
      valid: true,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: v => !!v || "Password is required"
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        signInRoutine({
          email: this.email,
          password: this.password
        }).then(() => {
          this.$router.push("/");
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>
