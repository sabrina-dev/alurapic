// alurapic/src/main.js

import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';

// registrando o módulo/plugin no global view object
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter ({ routes });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})