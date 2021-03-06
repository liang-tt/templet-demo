// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import './element-variables.scss'
import router from './router'
import axios from './common/axios'

Vue.config.productionTip = false

Vue.use(Element)
Vue.prototype.$https = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App } ,
  template: '<App/>'
})
