<template>
  <v-container
    id="scroll-target"
    style="max-height: 50vh; margin: 40px 0; max-width: 100%;"
    class="scroll-y"
  >
    <v-list>
      <v-list-tile
        v-for="(message, index) in messages"
        :key="index"
        avatar
        @click=""
      >
        <v-list-tile-avatar>
          <img :src="message.user.image">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-text="message.content"></v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-list-tile-action-text>2018/09/09 10:10</v-list-tile-action-text>
          <v-icon>
            delete
          </v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "TeamMemberList",
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
</style>
