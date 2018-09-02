<template>
  <v-card
    hover
    width="200px"
    :to="`/teams/${team.id}`"
  >

    <v-card-actions>
      <v-icon>team</v-icon>
      <v-card-title v-text="team.name"></v-card-title>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "TeamListElement",
  props: {
    team: Object
  }
};
</script>

<style scoped lang="scss">
</style>
