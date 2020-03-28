import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import store from './store/store'
import axios from 'axios';

axios.defaults.baseURL = 'https://vue-axios-ed9e4.firebaseio.com';
axios.defaults.headers.common['Authorizations'] = 'Rafael Bar';
axios.defaults.headers.get['accepts'] = 'application/json';

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log(config);
  return config;
});
const resInterceptor = axios.interceptors.response.use(res => {
  console.log(res);
  return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

Vue.use(VueRouter);

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})