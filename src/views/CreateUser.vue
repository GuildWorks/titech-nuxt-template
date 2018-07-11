<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <p>もぶ</p>
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
  created() {
    this.createUser({name: 'xxx', email: 'aa@example.com'});
  },
  methods: {
    ...mapActions("users", {
      createUser: CREATE_USER
    })
  }
};
</script>
