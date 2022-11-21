import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./assets/fontawesome/all.js";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./plugins/axios";
import "./plugins/transitionsMk.css";
import "./css/table.css";
import Toasted from 'vue-toasted'

Vue.config.productionTip = false;

Vue.use(Toasted, {
  theme: 'outline',
  position: 'top-right',
  duration: 1500
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
