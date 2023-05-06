import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App.vue'

import 'vuesax/dist/vuesax.css'
Vue.config.productionTip = false
Vue.use(Vuesax)
new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
