import Vue from 'vue'
import './plugins/vuetify';
import App from './App.vue'
import Vuetify from 'vuetify';
import store from './store';
import VueRouter from 'vue-router'

import Messages from './components/Messages.vue'
import NewMessage from './components/newMessage.vue'
import Message from './components/Message.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'



Vue.use(Vuetify);
Vue.use(VueRouter)


const routes = [
  {path: '/',component: Messages},
  {path: '/NewMessage',component: NewMessage},
  { path: "/Message/:id", component: Message},
  { path: "/register", component: Register},
  {path: '/login', component: Login}

]

const router = new VueRouter({routes, mode: 'history'})

Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify : new Vuetify(),
  render: h => h(App),
}).$mount('#app')
