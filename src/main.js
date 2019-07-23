import Vue from 'vue'
import App from './App.vue'

import VeeValidate from 'vee-validate';  // Add this
Vue.use(VeeValidate);  // Add this

Vue.config.productionTip = false

// other imports removed for brevity
import router from './router'

new Vue({
  router,               // Add this line
  render: h => h(App)
}).$mount('#app')