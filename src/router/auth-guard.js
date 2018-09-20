import Firebase from "@/api/firebase";

export default (to, from, next) => {
  if (Firebase.getAuth()) {
    next();
  } else {
    next("/sign_in");
  }
};
