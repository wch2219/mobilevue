// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './css/main.css'

Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Mint from 'mint-ui';
import'mint-ui/lib/style.css'
Vue.use(ElementUI);

Vue.use(Mint);
import {api, post, fetch, patch, put} from './http/httputils.js'
//定义全局变量

Vue.prototype.$api = api;
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
/* eslint-disable no-new */
import router from './router'
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
