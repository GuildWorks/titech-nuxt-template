<template>
  <user-list></user-list>
</template>

<script>
// @ is an alias to /src
import UserList from "@/components/UserList.vue";

export default {
  name: "home",
  components: {
    UserList
  }
};
</script>
