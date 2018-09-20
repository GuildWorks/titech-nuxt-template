<template>
  <v-container fluid>
    <v-layout column>
      <v-flex xs12>
        <v-layout row xs12 wrap>
          <v-flex xs9 md11>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="content"
                @keyup.enter="sendMessage"
                label="Content"
                :rules="contentRules"
                required
              ></v-text-field>
            </v-form>
          </v-flex>
          <v-flex xs3 md1>
            <v-btn
              color="primary"
              :disabled="!valid"
              @click="sendMessage"
            >
              <v-icon>send</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { CREATE_MESSAGE } from "@/store/modules/messages/action-types";
import { mapActions } from "vuex";

export default {
  name: "TeamMemberList",
  data() {
    return {
      content: "",
      valid: true,
      contentRules: [v => !!v || "Content is required"]
    };
  },
  props: {
    currentUser: {
      type: Object,
      required: true
    },
    teamId: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions("messages", {
      createMessage: CREATE_MESSAGE
    }),
    clearForm() {
      this.content = "";
    },
    sendMessage() {
      if (this.$refs.form.validate()) {
        this.createMessage({
          userId: this.currentUser.id,
          teamId: this.teamId,
          content: this.content
        });
        this.clearForm();
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>
