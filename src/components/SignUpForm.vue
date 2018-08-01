<template>
  <v-content>
    <v-container fill-height>
      <v-layout justify-center align-center>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
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
            ユーザー作成
          </v-btn>
        </v-form>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import api from "@/api";

const signUpRoutine = params =>
  new Promise((resolve, reject) => {
    api.signUp
      .createData(params)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });

export default {
  name: "SignUpForm",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      valid: true,
      nameRules: [v => !!v || "Name is required"],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length > 6 || "Password is more 6 characters"
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        signUpRoutine({
          name: this.name,
          email: this.email,
          password: this.password
        }).then(() => {
          this.$router.push("/sign_up/complete");
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>
