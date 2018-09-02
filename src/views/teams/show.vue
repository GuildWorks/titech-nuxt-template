<template>
  <div>
    <v-content>
      <v-container fill-height>
        <div v-if="team">
          <p>{{ team.id }}</p>
          <p>{{ team.name }}</p>
          <team-member-list :users="team.users"></team-member-list>
        </div>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import { TEAM } from "@/store/modules/teams/getter-types";
import { FETCH_TEAM } from "@/store/modules/teams/action-types";
import { mapGetters, mapActions } from "vuex";
import TeamMemberList from "./components/TeamMemberList.vue";

export default {
  name: "Team",
  components: {
    TeamMemberList
  },
  props: ["teamId"],
  computed: {
    ...mapGetters("teams", {
      getTeam: TEAM
    }),
    team() {
      return this.getTeam(Number(this.teamId));
    }
  },
  created() {
    this.fetchTeam(Number(this.teamId));
  },
  methods: {
    ...mapActions("teams", {
      fetchTeam: FETCH_TEAM
    })
  }
};
</script>
