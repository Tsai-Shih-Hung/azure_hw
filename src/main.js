import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import router from './router'
import { CarouselPlugin } from 'bootstrap-vue'
import 'bootstrap'
import { rtdbPlugin } from 'vuefire'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BNavbar } from 'bootstrap-vue'
import { NavbarPlugin } from 'bootstrap-vue'


Vue.use(NavbarPlugin)
Vue.component('b-navbar', BNavbar)
Vue.use(rtdbPlugin)
Vue.use(VueAxios, axios)

import VueQuillEditor from 'vue-quill-editor'


Vue.use(VueQuillEditor, /* { default global options } */)

Vue.config.productionTip = false;

Vue.use(CarouselPlugin)
Vue.use(VueRouter)



new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
