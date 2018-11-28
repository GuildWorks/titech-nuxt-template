<template>
  <div>
      <v-content>
        <ul>
          <router-link
            v-for="team in teams"
            :key="team.id"
            tag="li"
            :to="`/teams/${team.id}`">{{team.name}}
          </router-link>
        </ul>
      </v-content>
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "Teams",
  data() {
      return {
        teams: []
      }
  },
  created() {
      console.log(api.fetchTeams());
      this.teams = api.fetchTeams();
  }
};
</script>
