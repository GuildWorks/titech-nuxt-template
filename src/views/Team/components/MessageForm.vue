<template>
  <v-container fluid>
    <v-layout column>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-flex xs12>
          <v-layout row xs12 wrap>
            <v-flex xs9 md11>
              <v-text-field
                v-model="content"
                label="Content"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs3 md1>
              <v-btn
                :disabled="!valid"
                @click=""
              >
                <v-icon>send</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "TeamMemberList",
  data() {
    return {
      content: ""
    };
  },
  methods: {
    sendMessage() {
      console.log("send");
    },
    onScroll() {
      console.log("scroll");
    }
  }
};
</script>

<style scoped lang="scss">
</style>
