<template>
  <v-content>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <to-do></to-do>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src
import ToDo from "./components/ToDo.vue";

export default {
  name: "Todo",
  components: {
    ToDo
  }
};
</script>

<style scoped lang="scss">
</style>
