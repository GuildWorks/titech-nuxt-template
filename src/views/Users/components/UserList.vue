<template>
  <v-card>
    <v-container
      fluid
      grid-list-md
    >
      <v-layout row wrap>
        <v-flex
          v-for="user in users"
          :key="user.id"
        >
          <user-list-element :user="user"></user-list-element>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
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
