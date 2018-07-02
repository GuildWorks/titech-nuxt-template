<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <router-link :to="`/users/${user.id}`">
        <user-list-element :user=user></user-list-element>
      </router-link>
    </li>
  </ul>
</template>

<script>
import UserListElement from "./UserListElement.vue";
import * as fromUsers from "@/store/modules/users"
import { mapGetters } from 'vuex'

export default {
  name: "UserList",
  components: {
    UserListElement
  },
  computed: {
    ...mapGetters([
      'users'
    ])
  },
  created() {
    this.$store.dispatch(fromUsers.FETCH_USERS)
  }
};
</script>

<style scoped lang="scss">
</style>
