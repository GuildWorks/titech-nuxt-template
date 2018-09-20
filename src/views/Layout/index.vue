<template>
  <div>
    <header-tool-bar/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderToolBar from "./components/HeaderToolBar.vue";

export default {
  name: "Users",
  components: {
    HeaderToolBar
  }
};
</script>

<style scoped lang="scss">
</style>
