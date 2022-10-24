import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = "https://mk-erp-36855-default-rtdb.firebaseio.com/";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  },
});
