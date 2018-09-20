<template>
  <div class="text-xs-center">
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style scoped lang="scss">
.v-progress-circular {
  margin: 1rem;
}
</style>
