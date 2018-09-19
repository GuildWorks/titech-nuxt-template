<template>
  <v-card>
    <v-layout align-center justify-center>
      <v-flex v-for="user in users" :key="user.id">
        <v-tooltip top>
          <v-avatar :size="50" color="grey lighten-4" slot="activator">
            <img :src="userImage(user)" alt="avatar">
          </v-avatar>
          <span>{{ user.name }}</span>
        </v-tooltip>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: "TeamMemberList",
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  methods: {
    userImage(user) {
      return user.image ? user.image : "/blank-profile.png";
    }
  }
};
</script>

<style scoped lang="scss">
</style>
