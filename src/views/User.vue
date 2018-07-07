<template>
  <user-profile></user-profile>
</template>

<script>
// @ is an alias to /src
import UserProfile from "@/components/UserProfile.vue";

export default {
  name: "Users",
  components: {
    UserProfile
  }
};
</script>
