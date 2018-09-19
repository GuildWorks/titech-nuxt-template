<template>
  <v-list subheader>
    <v-subheader>チーム一覧</v-subheader>
    <v-list-tile avatar v-for="team in teams" :key="team.id" :to="`/teams/${team.id}`">
      <v-list-tile-content>
        <v-list-tile-title v-html="team.name"></v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon>people</v-icon>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: "TeamList",
  props: {
    teams: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
</style>
