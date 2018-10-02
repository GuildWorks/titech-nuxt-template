<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <user-list :users="users"></user-list>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import UserList from "./components/UserList.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Users",
  components: {
    UserList
  },
  computed: {
    ...mapGetters({
      users: "users/ALL_USERS"
    })
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    ...mapActions({
      fetchUsers: "users/FETCH_USERS"
    })
  }
};
</script>
