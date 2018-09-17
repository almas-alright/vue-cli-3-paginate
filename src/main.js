import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import './../node_modules/bulma/css/bulma.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

console.log(require('./components/Item.vue'));
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
import TestComponent from '@/components/Item.vue'
// Vue.component('TestComponent', require('./components/Item.vue').default)
Vue.component('TestComponent', TestComponent)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


