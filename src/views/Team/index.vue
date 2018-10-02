<template>
  <div v-if="team">
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs6>
            <h1>{{ team.name }}</h1>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <team-member-list :users="team.users"></team-member-list>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import TeamMemberList from "./components/TeamMemberList.vue";

export default {
  name: "Team",
  components: {
    TeamMemberList
  },
  props: ["teamId"],
  computed: {
    ...mapGetters({
      getTeam: "teams/TEAM"
    }),
    team() {
      return this.getTeam(this.teamId);
    }
  },
  created() {
    this.fetchTeam(this.teamId);
  },
  methods: {
    ...mapActions({
      fetchTeam: "teams/FETCH_TEAM"
    })
  }
};
</script>
