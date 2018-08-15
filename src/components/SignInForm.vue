<template>
  <v-content>
    <v-container fill-height>
      <v-layout justify-center align-center>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          ></v-text-field>
          <v-btn
            large
            color="primary"
            :disabled="!valid"
            @click="submit">
            ログイン
          </v-btn>
        </v-form>
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
