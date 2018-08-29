<template>
  <div v-if="currentUser">
    <p>{{ currentUser.id }}</p>
    <img :src="currentUser.image">
    <p>{{ currentUser.name }}</p>
    <p>{{ currentUser.email }}</p>
    <p v-if="currentUser.team">{{ currentUser.team.name }}</p>
  </div>
</template>

<script>
import { USER } from "@/store/modules/users/getter-types";
import { FETCH_USER } from "@/store/modules/users/action-types";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UserProfile",
  props: {
    userId: {
      required: true,
      type: Number
    }
  },
  computed: {
    ...mapGetters("users", {
      user: USER
    }),
    currentUser() {
      return this.user(this.userId);
    }
  },
  created() {
    this.fetchUser(this.userId);
  },
  methods: {
    ...mapActions("users", {
      fetchUser: FETCH_USER
    })
  }
};
</script>

<style scoped lang="scss">
</style>
