import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import axios from 'axios';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.prototype.$backendhostname = 'http://localhost:3000';
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
