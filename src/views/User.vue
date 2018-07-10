<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <user-profile></user-profile>
        </v-layout>
      </v-container>
    </v-content>
  </div>
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
