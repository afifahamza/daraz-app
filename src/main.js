import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import "./assets/css/global.css";

Vue.config.productionTip = false;

import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.baseURL = "https://664d0c87ede9a2b5565284f2.mockapi.io/api/";

Vue.use(VueAxios, axios);

Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  vuetify,

  render: function (h) {
    return h(App);
  },
}).$mount("#app");
