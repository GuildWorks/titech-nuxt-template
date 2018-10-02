<template>
  <v-layout row v-if="currentUser">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
            :src="currentUser.image"
            height="300px"
        >
          <v-layout
              column
              fill-height
          >
            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">{{ currentUser.name }}</div>
            </v-card-title>
          </v-layout>
        </v-img>

        <v-list two-line>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ currentUser.email }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">people</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-if="currentUser.team">{{ currentUser.team.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UserProfile",
  props: {
    userId: {
      required: true,
      type: String
    }
  },
  computed: {
    ...mapGetters({
      user: "users/USER"
    }),
    currentUser() {
      return this.user(this.userId);
    }
  },
  created() {
    this.fetchUser(this.userId);
  },
  methods: {
    ...mapActions({
      fetchUser: "users/FETCH_USER"
    })
  }
};
</script>

<style scoped lang="scss">
</style>
