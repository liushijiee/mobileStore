//全局引入vant 
import Vant from 'vant';
import 'vant/lib/index.css';

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/assets/css/all.css'
import '@/assets/js/flexible.js'
import LyTab from 'ly-tab'
import '@/assets/css/iconfont.css'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import fastClick from 'fastclick'
fastClick.attach(document.body);


Vue.use(Vant);
Vue.use(Mint)
Vue.use(LyTab)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
