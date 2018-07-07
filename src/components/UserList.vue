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

export default {
  name: "UserList",
  components: {
    UserListElement
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
</style>
