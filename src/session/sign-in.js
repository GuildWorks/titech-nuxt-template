import * as firebase from "firebase";

export const _signIn = (email, password) => {
  const params = {
    email: email,
    password: password
  };

  return firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function() {
      return firebase
        .auth()
        .signInWithEmailAndPassword(params.email, params.password)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          alert(error.message);
        });
    })
    .catch(function(error) {
      alert(error.message);
    });
};
