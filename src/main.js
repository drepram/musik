import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.use(Buefy);

window.vm = new Vue({
  el: '#app',
  render: h => h(App)
})
