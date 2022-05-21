//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
// 引入样式组件
import { Button, Select } from 'element-ui';

//关闭Vue的生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)

// 使用样式组件
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	router:router
})
