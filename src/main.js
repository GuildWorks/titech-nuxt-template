import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vuetify/dist/vuetify.min.css";
import firebase from "firebase";

Vue.use(Vuetify);

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyD1-XpeZoFVg7H3MnRpWJLeSgqCzTg30P8",
  authDomain: "titech-83c7f.firebaseapp.com",
  databaseURL: "https://titech-83c7f.firebaseio.com",
  projectId: "titech-83c7f",
  storageBucket: "titech-83c7f.appspot.com",
  messagingSenderId: "1027200745609"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
  if(user != null) {
    router.push("/");
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
