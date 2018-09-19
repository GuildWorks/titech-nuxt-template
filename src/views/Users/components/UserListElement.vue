<template>
  <v-card
    hover
    width="200px"
    :to="`/users/${user.id}`"
  >
    <v-img
      :src="userImage"
      height="256px"
    >
    </v-img>

    <v-card-actions>
      <v-icon>person</v-icon>
      <v-card-title v-text="user.name"></v-card-title>
    </v-card-actions>

    <v-card-actions>
      <v-icon>email</v-icon>
      <v-card-title v-text="user.email"></v-card-title>
    </v-card-actions>
    
    <v-card-actions>
      <v-icon>people</v-icon>
      <v-card-title v-if="user.team" v-text="user.team.name"></v-card-title>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "UserListElement",
  props: {
    user: Object
  },
  computed: {
    userImage() {
      return this.user.image ? this.user.image : "/blank-profile.png";
    }
  }
};
</script>

<style scoped lang="scss">
</style>
