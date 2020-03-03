import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store/index'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(store)
Vue.use(Vuex)
Vue.use(VueSweetalert2);

import Form from '../src/components/Form.vue'
import Table from '../src/components/Table.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Table },
  { path: '/:id/:action', component: Form,name:'Form' },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
