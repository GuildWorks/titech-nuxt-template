<template>
  <div>
    <sign-in-form></sign-in-form>
  </div>
</template>

<script>
// @ is an alias to /src
import SignInForm from "./components/SignInForm";

export default {
  name: "SignIn",
  components: {
    SignInForm
  }
};
</script>
