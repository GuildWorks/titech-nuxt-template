import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vuetify/dist/vuetify.min.css";
import Firebase from "./api/firebase";

Vue.use(Vuetify);

Vue.config.productionTip = false;

const initializeVueApp = () => {
  return new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
};

Firebase.initFirebase(initializeVueApp);
