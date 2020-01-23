// Library
import Vue from 'vue'
import vuetify from './plugins/vuetify';
import router from './router';

// Components
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
