import firebase from "firebase";
import { ON_AUTH_STATE_CHANGED } from "@/store/modules/session/action-types";
import store from "@/store";
import router from "@/router";
import defaultOptions from "@/storage/options.js";
import StorageFactory from "@/storage/storage.js";

const localStorage = StorageFactory(
  Object.assign(defaultOptions, { storageType: "localStorage" })
);

firebase.initializeApp({
  apiKey: "AIzaSyD1-XpeZoFVg7H3MnRpWJLeSgqCzTg30P8",
  authDomain: "titech-83c7f.firebaseapp.com",
  databaseURL: "https://titech-83c7f.firebaseio.com",
  projectId: "titech-83c7f",
  storageBucket: "titech-83c7f.appspot.com",
  messagingSenderId: "1027200745609"
});
let auth = firebase.auth();
let database = firebase.firestore();

let _userInfo = {};
let _userRef = null;

export default {
  initFirebase() {
    auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
  },

  signIn(params) {
    auth
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
  },

  signOut() {
    localStorage.removeItem(["session", "userInfo"].join("."));
    auth.signOut();
  },

  onAuthStateChanged(user) {
    if (user) {
      this.fetchUserInfo(user.uid)
        .then(val => {
          _userInfo = {
            loggedIn: true,
            uid: user.uid,
            name: val.name,
            image: val.image
          };
          store.dispatch(
            `session/${ON_AUTH_STATE_CHANGED}`,
            Object.assign({}, _userInfo)
          );
          localStorage.setItem(
            ["session", "userInfo"].join("."),
            JSON.stringify(_userInfo)
          );
          router.push("/");
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      router.push("/sign_in");
    }
  },

  fetchUserInfo(uid) {
    return new Promise((resolve, reject) => {
      _userRef = database.collection("users").doc(uid);
      _userRef
        .get()
        .then(snapshot => {
          const user = snapshot.data();
          resolve(user);
        })
        .catch(reject);
    });
  }
};
