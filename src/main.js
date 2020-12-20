import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import router from './router'
import { CarouselPlugin } from 'bootstrap-vue'
import 'bootstrap'

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.use(VueQuillEditor, /* { default global options } */)



Vue.config.productionTip = false;

Vue.use(CarouselPlugin)
Vue.use(VueRouter)

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
