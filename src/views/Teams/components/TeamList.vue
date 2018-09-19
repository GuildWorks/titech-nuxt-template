<template>
  <v-card>
    <v-container
      fluid
      grid-list-md
    >
      <v-layout row wrap>
        <v-flex
          v-for="team in teams"
          :key="team.id"
        >
          <team-list-element :team="team"></team-list-element>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import TeamListElement from "./TeamListElement.vue";

export default {
  name: "TeamList",
  components: {
    TeamListElement
  },
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
