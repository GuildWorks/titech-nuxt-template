<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <p>{{user.id}}</p>
      <img :src="user.image">
      <p>{{user.name}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TeamMemberList",
  props: {
    users: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
</style>
