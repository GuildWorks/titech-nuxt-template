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
let db = firebase.firestore();

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

  signUp(params) {
    return new Promise((resolve, reject) => {
      auth
        .createUserWithEmailAndPassword(params.email, params.password)
        .then(response => {
          this.setUserInfo({
            loggedIn: false,
            uid: response.user.uid,
            name: params.name,
            email: params.email,
            image: ""
          });
        })
        .catch(error => {
          reject(alert(error.message));
        });
    });
  },

  onAuthStateChanged(user) {
    if (user) {
      this.fetchUserInfo(user.uid)
        .then(val => {
          const _userInfo = {
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
      db.collection("users")
        .doc(uid)
        .get()
        .then(snapshot => {
          const user = snapshot.data();
          const result = user || {};
          resolve(result);
        })
        .catch(reject);
    });
  },

  setUserInfo(userInfo) {
    return new Promise((resolve, reject) => {
      if (
        !!userInfo.uid &&
        !!userInfo.name &&
        !!userInfo.email &&
        !!auth.currentUser
      ) {
        db.collection("users")
          .doc(userInfo.uid)
          .set({
            name: userInfo.name,
            email: userInfo.email,
            image: userInfo.image,
            team: null
          })
          .then(response => {
            resolve(response);
          })
          .catch(reject);
      }
    });
  },

  fetchUsers() {
    return new Promise((resolve, reject) => {
      if (auth.currentUser) {
        db.collection("users")
          .get()
          .then(snapshot => {
            const userRefs = snapshot.docs.map(async userRef => {
              const user = userRef.data();
              user.id = userRef.id;
              user.team = null;
              if (user.team) {
                const teamRef = await user.team.get();
                user.team = teamRef.data();
              }
              return user;
            });
            Promise.all(userRefs).then(users => {
              resolve(users);
            });
          })
          .catch(reject);
      }
    });
  },

  fetchUser(uid) {
    return new Promise((resolve, reject) => {
      db.collection("users")
        .doc(uid)
        .get()
        .then(async snapshot => {
          const user = snapshot.data();
          user.id = snapshot.id;
          user.team = null;
          if (user.team) {
            const teamRef = await user.team.get();
            user.team = teamRef.data();
          }
          resolve(user);
        })
        .catch(reject);
    });
  }
};
