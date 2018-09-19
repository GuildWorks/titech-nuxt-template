<template>
  <v-content>
    <v-container>
      <team-list :teams="teams"></team-list>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src
import TeamList from "./components/TeamList.vue";
import { ALL_TEAMS } from "@/store/modules/teams/getter-types";
import { FETCH_TEAMS } from "@/store/modules/teams/action-types";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Teams",
  components: {
    TeamList
  },
  computed: {
    ...mapGetters("teams", {
      teams: ALL_TEAMS
    })
  },
  created() {
    this.fetchTeams();
  },
  methods: {
    ...mapActions("teams", {
      fetchTeams: FETCH_TEAMS
    })
  }
};
</script>
