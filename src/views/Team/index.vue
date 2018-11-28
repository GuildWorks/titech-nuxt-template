<template>
  <div>
      <v-content>
          <p>team</p>
          <p>{{team.name}}</p>
      </v-content>
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "Team",
  props: ["teamId"],
  data() {
      return {
        team: null
      }
  },
  created() {
    console.log(api.fetchTeam(this.teamId));
    this.team = api.fetchTeam(this.teamId);
  }
};
</script>
