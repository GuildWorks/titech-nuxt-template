<template>
  <div>
    <v-content>
      <v-container fill-height>
        <div v-if="team">
          <p>{{ team.id }}</p>
          <p>{{ team.name }}</p>
          <team-member-list :users="users"></team-member-list>
        </div>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import { TEAM } from "@/store/modules/teams/getter-types";
import { USERS_BELONGS_TO_TEAMS } from "@/store/modules/users/getter-types";
import { FETCH_USERS } from "@/store/modules/users/action-types";
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
    ...mapGetters("users", {
      getUsersBelongsToTeam: USERS_BELONGS_TO_TEAMS
    }),
    team() {
      return this.getTeam(this.teamId);
    },
    users() {
      return this.getUsersBelongsToTeam(this.teamId);
    }
  },
  created() {
    this.fetchUsers();
    this.fetchTeam(this.teamId);
  },
  methods: {
    ...mapActions("teams", {
      fetchTeam: FETCH_TEAM
    }),
    ...mapActions("users", {
      fetchUsers: FETCH_USERS
    })
  }
};
</script>
