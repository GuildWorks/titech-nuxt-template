<template>
  <div v-if="team">
    <v-content>
      <v-container fluid grid-list-md>
        <h1>{{ team.name }}</h1>
        <team-member-list :users="users"></team-member-list>
        <message-list :currentUser="currentUser" :messages="messages"></message-list>
        <message-form :currentUser="currentUser" :teamId="team.id"></message-form>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import { CURRENT_USER } from "@/store/modules/session/getter-types";
import { TEAM } from "@/store/modules/teams/getter-types";
import { MESSAGES_BELONGS_TO_TEAMS } from "@/store/modules/messages/getter-types";
import { USERS_BELONGS_TO_TEAMS } from "@/store/modules/users/getter-types";
import { FETCH_USERS } from "@/store/modules/users/action-types";
import { FETCH_TEAM } from "@/store/modules/teams/action-types";
import { FETCH_MESSAGES } from "@/store/modules/messages/action-types";
import { mapGetters, mapActions } from "vuex";
import TeamMemberList from "./components/TeamMemberList.vue";
import MessageList from "./components/MessageList.vue";
import MessageForm from "./components/MessageForm.vue";

export default {
  name: "Team",
  components: {
    TeamMemberList,
    MessageList,
    MessageForm
  },
  props: ["teamId"],
  computed: {
    ...mapGetters("teams", {
      getTeam: TEAM
    }),
    ...mapGetters("users", {
      getUsersBelongsToTeam: USERS_BELONGS_TO_TEAMS
    }),
    ...mapGetters("messages", {
      getMessagesBelongsToTeam: MESSAGES_BELONGS_TO_TEAMS
    }),
    ...mapGetters("session", {
      currentUser: CURRENT_USER
    }),
    team() {
      return this.getTeam(this.teamId);
    },
    users() {
      return this.getUsersBelongsToTeam(this.teamId);
    },
    messages() {
      return this.getMessagesBelongsToTeam(this.teamId);
    }
  },
  created() {
    this.fetchUsers();
    this.fetchTeam(this.teamId);
    this.fetchMessages(this.teamId);
  },
  methods: {
    ...mapActions("teams", {
      fetchTeam: FETCH_TEAM
    }),
    ...mapActions("users", {
      fetchUsers: FETCH_USERS
    }),
    ...mapActions("messages", {
      fetchMessages: FETCH_MESSAGES
    })
  }
};
</script>
