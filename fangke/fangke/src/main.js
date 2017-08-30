// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import frilter from './filter/filterwhole'
import ajax from './plugin/plusready'

import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(frilter);
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(ajax)
// var bus = new Vue()
  new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
 })
