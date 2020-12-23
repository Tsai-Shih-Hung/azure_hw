import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import router from './router'
import { CarouselPlugin } from 'bootstrap-vue'
import 'bootstrap'
import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin)





import VueQuillEditor from 'vue-quill-editor'


Vue.use(VueQuillEditor, /* { default global options } */)

Vue.config.productionTip = false;

Vue.use(CarouselPlugin)
Vue.use(VueRouter)



new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
