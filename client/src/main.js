import Vue from "vue";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import axios from "./plugins/axios";

import vuetify from "@/plugins/vuetify"; // path to vuetify export
import "./assets/main.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
