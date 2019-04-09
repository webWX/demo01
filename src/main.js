import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/index';

import '@/assets/css/common.css';

import '@/axios/index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
