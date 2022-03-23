import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import i18n from "@/i18n";

import "@/assets/css/reset.css";
import "@/assets/css/main.css";

Vue.config.productionTip = false;
Vue.use(Element);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
