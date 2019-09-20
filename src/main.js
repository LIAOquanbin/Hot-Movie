import Vue from 'vue'
import App from './App.vue'
import router from '../router/index'
import axios from 'axios'
import store from './store/index'

// import Vueaxios from 'vue-axios';

Vue.prototype.axios = axios;
Vue.filter('setWH',(url , arg)=>{
  return url.replace(/w\.h/,arg);
});

import Loaidng from '@/components/loading'
// 注册全局组件
Vue.component('Loaidng',Loaidng)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
// router.push('/CatIndex/nowPlay')

