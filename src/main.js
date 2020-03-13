import Vue from 'vue'
import App from './App.vue'
import api from '../api'
import Mycomponents from './components/my-component'

Vue.prototype.$axios = api

Vue.config.productionTip = false
Vue.use(Mycomponents)
new Vue({
  render: h => h(App),
}).$mount('#app')
