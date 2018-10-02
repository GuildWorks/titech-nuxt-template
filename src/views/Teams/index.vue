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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Teams",
  components: {
    TeamList
  },
  computed: {
    ...mapGetters({
      teams: "teams/ALL_TEAMS"
    })
  },
  created() {
    this.fetchTeams();
  },
  methods: {
    ...mapActions({
      fetchTeams: "teams/FETCH_TEAMS"
    })
  }
};
</script>
