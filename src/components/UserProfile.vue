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
  name: "UserProfile",
  data() {
    return {
      user: {
        id: 1,
        name: `太郎`,
        email: `tarou@example.com`,
        image: require(`../assets/logo.png`),
        team: {
          name: `チームA`
        }
      }
    };
  }
};
</script>

<style scoped lang="scss">
</style>
