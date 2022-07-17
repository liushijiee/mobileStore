import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/assets/css/all.css'
import '@/assets/js/flexible.js'
import LyTab from 'ly-tab'

Vue.use(LyTab)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
