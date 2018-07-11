<template>
  <v-list-tile>
    <v-list-tile-avatar>
      <img v-if="!!user.image" :src="user.image" alt="">
      <img v-else src="/blank-profile.png" alt="no image">
    </v-list-tile-avatar>
    <v-list-tile-content width="50px">
      <v-list-tile-title v-text="user.id"></v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-content>
      <v-list-tile-title v-text="user.name"></v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-content>
      <v-list-tile-title v-text="user.email"></v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-content v-if="!!user.team">
      <v-list-tile-title v-text="user.team.name"></v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: "UserListElement",
  props: {
    user: Object
  }
};
</script>

<style scoped lang="scss">
</style>
