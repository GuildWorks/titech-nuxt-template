<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list dense>
        <v-subheader class="mt-3 grey--text text--darken-1">LIST</v-subheader>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue"
      dense
      fixed
      clipped-left
      dark
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">PBC#4</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "HeaderToolBar",
  data: () => ({
    drawer: false
  }),
  props: {
    source: String
  }
};
</script>

<style scoped lang="scss">
</style>
