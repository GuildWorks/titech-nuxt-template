<template>
  <div>
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
  </div>
</template>

<script>
// @ is an alias to /src
import { CREATE_USER } from "@/store/modules/users/action-types";
import { mapActions } from "vuex";

export default {
  name: "CreateUser",
  data() {
    return {
      name: "",
      email: "",
      valid: true,
      nameRules: [v => !!v || "Name is required"],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.createUser({ name: this.name, email: this.email });
      }
    },
    ...mapActions("users", {
      createUser: CREATE_USER
    })
  }
};
</script>
