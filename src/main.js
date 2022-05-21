import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './router'
// 引入样式组件
import { Button, Select } from 'element-ui';

Vue.use(vueRouter)
// 使用样式组件
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
