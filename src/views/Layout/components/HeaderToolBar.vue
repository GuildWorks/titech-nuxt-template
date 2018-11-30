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
        <v-list-tile-content>
          <v-list-tile to="/">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            トップ
          </v-list-tile>
          <v-list-tile to="/users">
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>
            ユーザー一覧
          </v-list-tile>
          <v-list-tile to="/teams">
            <v-list-tile-action>
              <v-icon>people</v-icon>
            </v-list-tile-action>
            チーム一覧
          </v-list-tile>
          <v-list-tile to="/signup">
            <v-list-tile-action>
              <v-icon>add</v-icon>
            </v-list-tile-action>
            サインアップ
          </v-list-tile>
          <v-list-tile to="/signin">
            <v-list-tile-action>
              <v-icon>input</v-icon>
            </v-list-tile-action>
            サインイン
          </v-list-tile>
          <v-list-tile v-on:click="signout">
            <v-list-tile-action>
              <v-icon>clear</v-icon>
            </v-list-tile-action>
            サインアウト
          </v-list-tile>
          <v-list-tile to="/todo">
            <v-list-tile-action>
              <v-icon>list</v-icon>
            </v-list-tile-action>
            TODO
          </v-list-tile>
        </v-list-tile-content>
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
  },
  methods: {
    signout: function(){
    }
  }
};
</script>

<style scoped lang="scss">
</style>
