// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.use(MintUI)
import AV from 'leancloud-storage'
const APP_ID = 'aqo24fyLSwdt4QOmU7FhCRjC-gzGzoHsz'
const APP_KEY = 'MwjglEqRTeh36Aplo9byttej'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})
Vue.prototype.$AV = AV
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
