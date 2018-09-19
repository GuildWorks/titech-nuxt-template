<template>
  <div v-if="team">
    <v-content>
      <v-container fluid grid-list-md>
        <h1>{{ team.name }}</h1>
        <team-member-list :users="users"></team-member-list>
        <message-list :messages="messagesDummy" />
        <message-form></message-form>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import { TEAM } from "@/store/modules/teams/getter-types";
import { ALL_MESSAGES } from "@/store/modules/messages/getter-types";
import { USERS_BELONGS_TO_TEAMS } from "@/store/modules/users/getter-types";
import { FETCH_USERS } from "@/store/modules/users/action-types";
import { FETCH_TEAM } from "@/store/modules/teams/action-types";
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
  data() {
    return {
      messagesDummy: [
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        },
        {
          content: "xxx",
          user: {
            name: "x",
            image: "https://randomuser.me/api/portraits/men/5.jpg"
          }
        }
      ]
    }
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
      messages: ALL_MESSAGES
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
