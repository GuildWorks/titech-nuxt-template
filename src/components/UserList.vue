<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <user-list-element :user=user></user-list-element>
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
  data() {
    return {
      users: [
        {
          id: 1,
          name: `太郎`,
          email: `tarou@example.com`,
          image: require(`../assets/logo.png`),
          team: {
            name: `チームA`
          }
        },
        {
          id: 2,
          name: `次郎`,
          email: `zirou@example.com`,
          image: require(`../assets/logo.png`),
          team: {
            name: `チームB`
          }
        },
        {
          id: 2,
          name: `三郎`,
          email: `saburou@example.com`,
          image: require(`../assets/logo.png`),
          team: {
            name: `チームC`
          }
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
</style>
