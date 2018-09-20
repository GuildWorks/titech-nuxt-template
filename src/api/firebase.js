import firebase from "firebase";
import { ON_AUTH_STATE_CHANGED } from "@/store/modules/session/action-types";
import { SET_LOADING } from "@/store/modules/shared/action-types";
import store from "@/store";
import router from "@/router";

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
let app = null;

export default {
  initFirebase(callback) {
    store.dispatch(`shared/${SET_LOADING}`, true);
    auth.onAuthStateChanged(user => {
      if (user) {
        this.fetchUserInfo(user.uid)
          .then(val => {
            const _userInfo = {
              loggedIn: true,
              id: user.uid,
              name: val.name,
              image: val.image
            };
            store.dispatch(
              `session/${ON_AUTH_STATE_CHANGED}`,
              Object.assign({}, _userInfo)
            );
            store.dispatch(`shared/${SET_LOADING}`, false);
          })
          .catch(e => {
            store.dispatch(`shared/${SET_LOADING}`, false);
            console.log(e);
          });
      } else {
        store.dispatch(`shared/${SET_LOADING}`, false);
        router.push("/sign_in");
      }

      if (!app) {
        app = callback();
      }
    });
  },

  getAuth() {
    return auth.currentUser;
  },

  signIn(params) {
    store.dispatch(`shared/${SET_LOADING}`, true);
    auth
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        return firebase
          .auth()
          .signInWithEmailAndPassword(params.email, params.password)
          .then(response => {
            console.log(response);
            router.push("/");
          })
          .catch(error => {
            alert(error.message);
            store.dispatch(`shared/${SET_LOADING}`, false);
          });
      })
      .catch(function(error) {
        alert(error.message);
        store.dispatch(`shared/${SET_LOADING}`, false);
      });
  },

  signOut() {
    auth.signOut();
  },

  signUp(params) {
    return new Promise((resolve, reject) => {
      auth
        .createUserWithEmailAndPassword(params.email, params.password)
        .then(response => {
          this.setUserInfo({
            loggedIn: false,
            id: response.user.id,
            name: params.name,
            email: params.email,
            image: ""
          });
          router.push("/sign_up/complete");
        })
        .catch(error => {
          reject(alert(error.message));
        });
    });
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
              if (user.team) {
                const teamRef = await user.team.get();
                user.team = teamRef.data();
                user.team.id = teamRef.id;
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
          if (user.team) {
            const teamRef = await user.team.get();
            user.team = teamRef.data();
            user.team.id = teamRef.id;
          }
          resolve(user);
        })
        .catch(reject);
    });
  },

  fetchTeams() {
    return new Promise((resolve, reject) => {
      if (auth.currentUser) {
        db.collection("teams")
          .get()
          .then(snapshot => {
            const teamRefs = snapshot.docs.map(async teamRef => {
              const team = teamRef.data();
              team.id = teamRef.id;
              return team;
            });
            Promise.all(teamRefs).then(teams => {
              resolve(teams);
            });
          })
          .catch(reject);
      }
    });
  },

  fetchTeam(teamId) {
    return new Promise((resolve, reject) => {
      db.collection("teams")
        .doc(teamId)
        .get()
        .then(async snapshot => {
          const team = snapshot.data();
          team.id = snapshot.id;
          resolve(team);
        })
        .catch(reject);
    });
  },

  joinTeam(teamId, userId) {
    return new Promise((resolve, reject) => {
      if (auth.currentUser) {
        db.collection("users")
          .doc(userId)
          .update({
            team: db.collection("teams").doc(teamId)
          })
          .then(response => {
            console.log("Document successfully updated!");
            resolve(response);
          })
          .catch(error => {
            console.error("Error updating document: ", error);
            reject(error);
          });
      }
    });
  },

  fetchMessages(teamId, callback) {
    if (auth.currentUser) {
      db.collection("messages")
        .where("teamId", "==", teamId)
        .orderBy("createdAt", "desc")
        .onSnapshot(snapshot => {
          const messageRefs = snapshot.docs.map(async messageRef => {
            const message = messageRef.data();
            message.id = messageRef.id;
            message.user = await this.fetchUser(message.userId);
            return message;
          });
          Promise.all(messageRefs).then(messages => {
            callback(messages);
          });
        });
    }
  },

  createMessage(userId, teamId, content) {
    return new Promise((resolve, reject) => {
      if (auth.currentUser) {
        const createdAt = firebase.firestore.FieldValue.serverTimestamp();
        db.collection("messages")
          .add({
            userId: userId,
            teamId: teamId,
            content: content,
            createdAt: createdAt
          })
          .then(docRef => {
            resolve(docRef.id);
          })
          .catch(error => {
            console.error("Error adding document: ", error);
            reject(error);
          });
      }
    });
  },

  deleteMessage(messageId) {
    return new Promise((resolve, reject) => {
      if (auth.currentUser) {
        db.collection("messages")
          .doc(messageId)
          .delete()
          .then(() => {
            resolve();
          })
          .catch(error => {
            console.error("Error removing document: ", error);
            reject(error);
          });
      }
    });
  }
};
