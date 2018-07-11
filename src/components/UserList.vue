<template>
  <v-layout row>
    <v-flex xs12>
      <v-list v-for="user in users" :key="user.id" avatar>
        <v-list-tile :to="`/users/${user.id}`">
          <user-list-element :user="user"></user-list-element>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import HeaderToolBar from "./HeaderToolBar.vue";
import UserListElement from "./UserListElement.vue";

export default {
  name: "UserList",
  components: {
    HeaderToolBar,
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
