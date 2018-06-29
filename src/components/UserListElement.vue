<template>
  <div>
    <p>{{ user.id }}</p>
    <img :src="user.image">
    <p>{{ user.name }}</p>
    <p>{{ user.email }}</p>
    <p>{{ user.team.name }}</p>
  </div>
</template>

<script>
export default {
  name: "UserListElement",
  props: {
    user: Object
  }
};
</script>

<style scoped lang="scss">
</style>
