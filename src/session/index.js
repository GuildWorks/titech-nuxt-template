import Firebase from "@/api/firebase";

export const _signIn = (email, password) => {
  const params = {
    email: email,
    password: password
  };

  return Firebase.signIn(params);
};

export const _signOut = () => {
  return Firebase.signOut();
};

export const _signUp = (name, email, password) => {
  const params = {
    name: name,
    email: email,
    password: password
  };

  return Firebase.signUp(params);
};
