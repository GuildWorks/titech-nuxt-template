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
              <v-btn flat small color="primary" to="sign_up">新規登録</v-btn>
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
import { SIGN_IN } from "@/store/modules/session/action-types";
import { mapActions } from "vuex";

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
      passwordRules: [v => !!v || "Password is required"]
    };
  },
  methods: {
    ...mapActions("session", {
      signIn: SIGN_IN
    }),
    submit() {
      if (this.$refs.form.validate()) {
        this.signIn({
          email: this.email,
          password: this.password
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>
