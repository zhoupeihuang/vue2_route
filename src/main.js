import Vue from 'vue';
import './index.css'
import App from './components/app.vue'


import VueRouter from 'vue-router'
//import store from './store/index.js';    //store
import routes from './route-config.js'

Vue.use(VueRouter);

//创建路由
const router = new VueRouter({
  mode: 'hash',    //路由的模式
  routes
});


new Vue({
	el:'#app', 
	router,
	render: h => h(App) 
})
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
//const app = new Vue({
//router
//}).$mount('#app')