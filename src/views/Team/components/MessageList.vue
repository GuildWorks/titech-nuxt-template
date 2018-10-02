<template>
  <v-container
    id="scroll-target"
    style="margin: 40px 0; max-width: 100%;"
    class="scroll-y"
  >
    <v-list>
      <v-list-tile
        v-for="(message, index) in messages"
        :key="index"
        avatar
      >
        <v-list-tile-avatar>
          <img :src="userImage(message.user)">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-text="message.content"></v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-list-tile-action-text>{{ message.createdAt | date }}</v-list-tile-action-text>

          <v-icon v-show="message.user.id === currentUser.id" @click="deleteMessage(message.id)">
            delete
          </v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-container>
</template>

<script>
import { DELETE_MESSAGE } from "@/store/modules/messages/action-types";
import { mapActions } from "vuex";

export default {
  name: "TeamMemberList",
  props: {
    currentUser: {
      type: Object,
      required: true
    },
    messages: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions("messages", {
      deleteMessage: DELETE_MESSAGE
    }),
    userImage(user) {
      return user.image ? user.image : "/blank-profile.png";
    }
  }
};
</script>

<style scoped lang="scss">
</style>
