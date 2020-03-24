import Vue from 'vue'
import './plugins/vuetify';
import App from './App.vue'
import Vuetify from 'vuetify';



Vue.use(Vuetify);


Vue.config.productionTip = false


new Vue({
  vuetify : new Vuetify(),
  render: h => h(App),
}).$mount('#app')
