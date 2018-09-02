<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <team-list :teams="teams"></team-list>
        </v-layout>
      </v-container>
    </v-content>
  </div>
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
