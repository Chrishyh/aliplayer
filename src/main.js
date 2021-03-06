// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAliplayerV2 from 'vue-aliplayer-v2';

Vue.config.productionTip = false
Vue.use(VueAliplayerV2); // 阿里播放器 全局注册

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

