<template>
  <user-list :users="users"></user-list>
</template>

<script>
// @ is an alias to /src
import UserList from "@/components/UserList.vue";
import { ALL_USERS } from "@/store/modules/users/getter-types";
import { FETCH_USERS } from "@/store/modules/users/action-types";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Users",
  components: {
    UserList
  },
  computed: {
    ...mapGetters("users", {
      users: ALL_USERS
    })
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    ...mapActions("users", {
      fetchUsers: FETCH_USERS
    })
  }
};
</script>
